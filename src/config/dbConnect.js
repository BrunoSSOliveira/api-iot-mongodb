import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();

const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;

mongoose.connect(`mongodb+srv://${db_user}:${db_pass}@clustcc.wflztmk.mongodb.net/iotWinetechClustered`);

let db = mongoose.connection;

export default db