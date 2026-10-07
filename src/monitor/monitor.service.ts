import { Context, ServiceSchema } from "moleculer";

let serviceAccessTracker: Map<string, number> | undefined;
try {
    const middlewareTracker = require("../../middleware.tracker");
    serviceAccessTracker = middlewareTracker.serviceAccessTracker;
} catch (e) {
    // fallback if middleware.tracker is not present
}

interface NodeServiceInfo {
    name: string;
    version?: string | number;
    settings?: any;
    metadata?: any;
    lastAccess?: number | null;
}

interface NodeMonitorInfo {
    nodeID: string;
    status: "UP" | "DOWN";
    services: NodeServiceInfo[];
    lastSeen: number | null;
    disconnectedAt: number | null;
    isLocal: boolean;
    hostname?: string | null;
    ipList?: string[];
    client?: any;
    cpu?: number | null;
}

const MonitorService: ServiceSchema = {
    name: "monitor",

    created() {
        (this as any).nodes = new Map<string, NodeMonitorInfo>();
    },

    started() {
        (this as any).syncNodes();
    },

    events: {
        "$node.connected"(ctx: Context<{ node: any; reconnected?: boolean }>) {
            const self = this as any;
            const node = ctx.params.node;
            const now = Date.now();
            self.nodes.set(node.id, {
                nodeID: node.id,
                status: "UP",
                services: self.getServices(node),
                lastSeen: now,
                disconnectedAt: null,
                isLocal: !!node.local,
                hostname: node.hostname ?? null,
                ipList: node.ipList ?? [],
                client: node.client ?? null,
                cpu: node.cpu ?? null
            });
            self.logger.info(`Node connected: ${node.id}`);
        },

        "$node.updated"(ctx: Context<{ node: any }>) {
            const self = this as any;
            const node = ctx.params.node;
            const now = Date.now();
            const previous = self.nodes.get(node.id);
            const isUp = node.available !== false;
            let disconnectedAt: number | null = null;
            if (!isUp) {
                disconnectedAt = previous?.status === "DOWN" ? previous.disconnectedAt : now;
            }
            self.nodes.set(node.id, {
                nodeID: node.id,
                status: isUp ? "UP" : "DOWN",
                services: self.getServices(node),
                lastSeen: isUp ? now : (previous?.lastSeen ?? null),
                disconnectedAt: disconnectedAt,
                isLocal: !!node.local,
                hostname: node.hostname ?? null,
                ipList: node.ipList ?? [],
                client: node.client ?? null,
                cpu: node.cpu ?? null
            });
            self.logger.info(`Node updated: ${node.id}`);
        },

        "$node.disconnected"(ctx: Context<{ node: any; unexpected: boolean }>) {
            const self = this as any;
            const { node, unexpected } = ctx.params;
            const now = Date.now();
            const previous = self.nodes.get(node.id);
            if (previous) {
                previous.status = "DOWN";
                previous.disconnectedAt = now;
                self.nodes.set(node.id, previous);
            } else {
                self.nodes.set(node.id, {
                    nodeID: node.id,
                    status: "DOWN",
                    services: self.getServices(node),
                    lastSeen: null,
                    disconnectedAt: now,
                    isLocal: !!node.local,
                    hostname: node.hostname ?? null,
                    ipList: node.ipList ?? [],
                    client: node.client ?? null,
                    cpu: node.cpu ?? null
                });
            }
            self.logger.warn(`Node disconnected: ${node.id}, unexpected=${unexpected}`);
        },

        "$services.changed"() {
            const self = this as any;
            self.syncNodes();
        }
    },

    methods: {
        getServices(node: any): NodeServiceInfo[] {
            if (!node?.services) {
                return [];
            }
            return node.services
                .filter((s: any) => {
                    const name = typeof s === "string" ? s : s?.name;
                    return name && name !== "$node" && name !== "api" && name !== "monitor";
                })
                .map((s: any) => {
                    const name = typeof s === "string" ? s : s.name;
                    return {
                        name: name,
                        version: s.version,
                        settings: s.settings,
                        metadata: s.metadata,
                        lastAccess: serviceAccessTracker?.get(name) || null
                    };
                });
        },

        syncNodes() {
            const self = this as any;
            try {
                const nodes: any[] = self.broker?.registry
                    ? self.broker.registry.getNodeList({ withServices: true })
                    : [];
                const now = Date.now();
                for (const node of nodes) {
                    const previous = self.nodes.get(node.id);
                    const isUp = node.available !== false;
                    let lastSeen: number | null = null;
                    let disconnectedAt: number | null = null;
                    if (isUp) {
                        lastSeen = node.lastHeartbeatTime ? node.lastHeartbeatTime * 1000 : now;
                    } else {
                        lastSeen = previous?.lastSeen ?? null;
                        disconnectedAt = previous?.disconnectedAt ?? now;
                    }
                    self.nodes.set(node.id, {
                        nodeID: node.id,
                        status: isUp ? "UP" : "DOWN",
                        services: self.getServices(node),
                        lastSeen: lastSeen,
                        disconnectedAt: disconnectedAt,
                        isLocal: !!node.local,
                        hostname: node.hostname ?? null,
                        ipList: node.ipList ?? [],
                        client: node.client ?? null,
                        cpu: node.cpu ?? null
                    });
                }
            } catch (err) {
                self.logger.error("Failed to sync nodes:", err);
            }
        }
    },

    actions: {
        list: {
            handler(ctx: Context) {
                const self = this as any;
                if (!self.nodes || self.nodes.size === 0) {
                    self.syncNodes();
                }
                return Array.from(self.nodes.values()).map((node: any) => ({
                    ...node,
                    services: (node.services || []).map((s: any) => ({
                        ...s,
                        lastAccess: serviceAccessTracker?.get(s.name) || s.lastAccess || null
                    }))
                }));
            }
        },

        get: {
            params: {
                nodeID: { type: "string", optional: true }
            },
            handler(ctx: Context<{ nodeID?: string }>) {
                const self = this as any;
                const nodeID = ctx.params.nodeID;
                if (!self.nodes || self.nodes.size === 0) {
                    self.syncNodes();
                }
                if (!nodeID) {
                    return Array.from(self.nodes.values()).map((node: any) => ({
                        ...node,
                        services: (node.services || []).map((s: any) => ({
                            ...s,
                            lastAccess: serviceAccessTracker?.get(s.name) || s.lastAccess || null
                        }))
                    }));
                }
                const node = self.nodes.get(nodeID);
                if (!node) return null;
                return {
                    ...node,
                    services: (node.services || []).map((s: any) => ({
                        ...s,
                        lastAccess: serviceAccessTracker?.get(s.name) || s.lastAccess || null
                    }))
                };
            }
        },

        services: {
            handler(ctx: Context) {
                const self = this as any;
                if (!self.nodes || self.nodes.size === 0) {
                    self.syncNodes();
                }
                const serviceMap = new Map<string, {
                    name: string;
                    version?: string | number;
                    status: "UP" | "DOWN";
                    lastAccess: number | null;
                    nodes: { nodeID: string; status: "UP" | "DOWN"; isLocal: boolean }[];
                }>();

                for (const node of self.nodes.values()) {
                    for (const s of node.services || []) {
                        const serviceName = typeof s === "string" ? s : s.name;
                        const lastAccess = serviceAccessTracker?.get(serviceName) || s.lastAccess || null;
                        if (!serviceMap.has(serviceName)) {
                            serviceMap.set(serviceName, {
                                name: serviceName,
                                version: s.version,
                                status: node.status,
                                lastAccess: lastAccess,
                                nodes: [{ nodeID: node.nodeID, status: node.status, isLocal: node.isLocal }]
                            });
                        } else {
                            const item = serviceMap.get(serviceName)!;
                            item.nodes.push({ nodeID: node.nodeID, status: node.status, isLocal: node.isLocal });
                            if (node.status === "UP") {
                                item.status = "UP";
                            }
                            if (lastAccess && (!item.lastAccess || lastAccess > item.lastAccess)) {
                                item.lastAccess = lastAccess;
                            }
                        }
                    }
                }
                return Array.from(serviceMap.values());
            }
        }
    }
};

export = MonitorService;
