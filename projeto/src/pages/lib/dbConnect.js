import mongoose from "mongoose"

export async function connectDb(){

    try {
        await mongoose.connect(DATABASE_URI)
        console.log("MongoDB Atlas conectado!")
    } catch(err) {
        console.log(err.message)
    }
}

export async function disconnectDb(){
    await mongoose.disconnect()
}