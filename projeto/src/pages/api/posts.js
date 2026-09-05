import { MongoClient } from "mongodb";

import { connectDB } from "../../lib/mongodb"; // ajuste o caminho conforme a estrutura real de pastas

const getAllPosts = async (db) => {
  const collection = db.collection("posts");
  const posts = await collection.find({}).toArray();
  return posts;
};

export default async function handler(req, res) {
  const { db, client } = await connectDB();

  if (req.method === "GET") {
    try {
      const posts = await getAllPosts(db);
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}
