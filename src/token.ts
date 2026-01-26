import { Arguments } from "@willsofts/will-util";
import { AuthenToken } from "@willsofts/will-lib";
import { v4 as uuid } from 'uuid';

let args = process.argv.slice(2);
let useruuid = Arguments.getString(args,uuid(),"-uuid") as string;
let site = Arguments.getString(args,"FWS","-site") as string;
let userid = Arguments.getString(args,"tester","-user") as string;
let expired = Arguments.getString(args,"24h","-expire") as string; 
let authtoken = Arguments.getString(args,undefined,"-token"); 
let secret = Arguments.getString(args,undefined,"-secret") as string; 
let ignored = Arguments.getBoolean(args,false,"-ignore") as boolean;
if(authtoken && authtoken.trim().length > 0) {
    let info = AuthenToken.verifyAuthenToken(authtoken,ignored,secret);
    console.log(info);
} else {
    let token = AuthenToken.createAuthenToken({identifier:useruuid, site:site, accessor:userid, type: "A"},expired,secret);
    console.log(token);
}
