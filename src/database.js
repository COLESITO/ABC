import {connect} from "mongoose";
import { MONGODB_URI } from "./config";

//MONGODB_URI =mongodb://127.0.0.1:27017/crud-mongo-ByCOLE
//console.log(process.env.MONGODB_URI);

(async () => {
    try{
        const db = await connect(MONGODB_URI);
        console.log("DB conected to", db.connection.name);
    }catch(error){
        console.error(error);
    }
})();