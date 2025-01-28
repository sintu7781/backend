import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})
connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MONGODB connection failed !!! ", error);
    throw new error;
})




/*
import express from "express";

const app = express(); 

( async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error: ", error);
            throw error;
        })
        //console.log(connectionInstance);
        app.listen(process.env.PORT, () => {
            console.log(`A app is listen on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
})()
*/
