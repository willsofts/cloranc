import os from "os";
import path from 'path';
import { Request, Response } from 'express';
import { JSONReply } from "@willsofts/will-api";
import { TknUploadRouter } from "@willsofts/will-core";
import { KnValidateInfo } from '@willsofts/will-core';
import { KnResponser } from "@willsofts/will-core";
import { ChatUserHandler } from "./ChatUserHandler";

export class ChatUserUploader extends TknUploadRouter {

	public getUploadPath() : string {
		return path.join(os.tmpdir(),"uploaded","chatuser");
	}

	protected override verifyFile(file: any, fileTypes: RegExp) : KnValidateInfo {
		this.logger.debug("fileFilter:",file);
		const filetypes = new RegExp("text|txt|csv","i");
		const extname =  filetypes.test(path.extname(file.originalname).toLowerCase());
		const mimetype = true; //filetypes.test(file.mimetype);
		this.logger.debug("verifyFile: extname",extname+", mimetype",mimetype);	  
		return {valid: extname && mimetype, info: "Invalid file type" };
	}

	protected override async doUploadFile(req: Request, res: Response) : Promise<void> {
		res.contentType('application/json');
		if(req.file?.originalname) {
			req.file.originalname = Buffer.from(req.file.originalname, 'latin1').toString('utf8');
		}
		this.logger.debug(this.constructor.name+".doUploadFile: body",JSON.stringify(req.body));
		this.logger.debug(this.constructor.name+".doUploadFile: file",req.file);
		let response: JSONReply = new JSONReply();
		response.head.modeling("chatuser","file");
		response.head.composeNoError();
		try {
            let ctx = await this.createContext(req);
			ctx.params.file = req.file;
			let handler = new ChatUserHandler();
			handler.obtain(this.service?.broker,this.logger);
			let rs = await handler.insert(ctx);
			response.body = rs;
			res.end(JSON.stringify(response));
		} catch(ex) {
			KnResponser.responseError(res,ex,"chatuser","file");
		}
	}

}

/*
curl -X POST http://localhost:8080/upload/chatuser/file -F filename=@D:\node\willsofts\cloranc\src\chatuser\users.txt
*/
