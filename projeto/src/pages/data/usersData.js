import { getMongoCollection } from "./mongodb";

const COLLECTION = "users";
export async function findUserByEmail(email) {
  const client = await getMongoCollection(COLLECTION);
  const result = await client.find({ email: String(email) }).toArray();
  return result;
}

export async function insertUser(user) {
  const client = await getMongoCollection(COLLECTION);
  const result = await client.insertOne(user);
  return result.insertedId;
}

export async function getAllPosts(id) {
  const posts = {
    method: "GET",
    headers: { "Content-Type": "aplication/json" },
  };
  const caminho = await fetch(`/api/posts`, posts);
  const result = caminho.status === 200 ? caminho.json() : [];
  return result;
}

export async function createPost(post) {
  const client = await getMongoCollection("posts");
  const result = await client.insertOne(post);
  return result.insertedId;
}
