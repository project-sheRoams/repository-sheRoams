// import  { MongoClient } from "mongodb"

// const URL = "mongodb://localhost:27017"

// let client
// async function connectToMongo() {
//   try {
//     if (!client) {
//       client = await MongoClient.connect(URL)
//     }
//     return client;
//   } catch (err) {
//     console.log(err)
//   }
// }

// export async function getMongoCollection(collectionName) {
//     const client = await connectToMongo()
//     return client.db("SheRoams").collection(collectionName)
//   }

const { MongoClient } = require('mongodb');

const dbName = 'sheRoams';
const collectionName = 'posts';
const connectionString = 'mongodb://localhost:27017/'; 

async function connectDB() {
  const client = await MongoClient.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  return { client, db, collection };
}

module.exports = { connectDB };
