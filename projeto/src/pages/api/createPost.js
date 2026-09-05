import { connectDB } from "../../lib/mongodb"; // ajuste o caminho conforme a estrutura real de pastas

const createNewPost = async (db, post) => {
  const collection = db.collection("posts");
  await collection.insertOne(post);
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
  } else if (req.method === "POST") {
    try {
      const post = req.body;
      await createNewPost(db, post);
      res.status(201).json({ message: "Post criado com sucesso" });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}
