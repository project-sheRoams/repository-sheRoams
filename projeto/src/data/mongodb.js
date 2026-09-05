import { MongoClient } from "mongodb";

const dbName = "SheRoams";

if (!process.env.MONGO_URL) {
  throw new Error("A variável de ambiente MONGO_URL não está definida no .env");
}

let client;

async function connectToMongo() {
  if (!client) {
    try {
      client = await MongoClient.connect(process.env.MONGO_URL);
    } catch (err) {
      console.error("Erro ao conectar ao MongoDB:", err);
      throw err;
    }
  }
  return client;
}

export async function getMongoCollection(collectionName) {
  const client = await connectToMongo();
  return client.db(dbName).collection(collectionName);
}
