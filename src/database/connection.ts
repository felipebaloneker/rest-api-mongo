import mongoose from "mongoose";

mongoose.connect(
    `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_MONGO_PORT}`,
    {},
    (res) => {
        if (!res) {
            console.log("Connected on MongoDb")
        } else {
            console.log("Error on Connect MongoDb: " + res)
        }
    }
)
mongoose.Promise = global.Promise
export { mongoose }