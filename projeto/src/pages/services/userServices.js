import { insertUser } from "../data/usersData";

export async function createUser(user){
    
    if(user.username === undefined || user.email === undefined || user.password === undefined){
        return undefined
    }
    const id = await insertUser(user)
    return id
}