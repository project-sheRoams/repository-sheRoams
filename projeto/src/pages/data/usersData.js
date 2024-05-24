import { getMongoCollection } from "./mongodb"

const COLLECTION = "users"

export async function insertUser(user){
    const client = await getMongoCollection(COLLECTION)
    const result = await client.insertOne(user)

    return result.insertedId
}
