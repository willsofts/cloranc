import { ChatUserHandler } from "./ChatUserHandler";

let args = process.argv.slice(2);
if(args.length > 0) {
    let file = args[0];    
    let handler = new ChatUserHandler();
    handler.remove({params: { file: file }, meta: {} })
    .then(rs => console.log(rs))
    .catch(ex => console.error(ex));
}

//node dist/chatuser/user.delete.js D:\node\willsofts\cloranc\src\chatuser\users.txt
