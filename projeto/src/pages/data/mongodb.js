import { MongoClient } from 'mongodb'

const dbName = 'sheRoams';
const collectionName = 'posts';
const connectionString = 'mongodb://localhost:27017/'; 

export async function connectDB() {
  const client = await MongoClient.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  return { client, db, collection };
}

export async function getMongoCollection(collection){
  const client = await connectDB()
  return await client.db(dbName).collection(collection)
}

