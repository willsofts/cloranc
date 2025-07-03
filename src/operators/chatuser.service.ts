import KnService from "@willsofts/will-db";
import { ServiceSchema } from "moleculer";
import { ChatUserHandler } from "../chatuser/ChatUserHandler";

const ChatUserService : ServiceSchema = {
    name: "chatuser",
    mixins: [KnService],
    handler: new ChatUserHandler(), 
}
export = ChatUserService;
