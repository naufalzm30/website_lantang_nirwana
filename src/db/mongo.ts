import { MongoClient } from "mongodb"; 
import { MONGO_URL} from "$env/static/private";

const client = new MongoClient(MONGO_URL);

export function start_mongo(): Promise<MongoClient> {
    console.log('starting...');
    return client.connect();
}

export default client.db('lantang_nirwana');