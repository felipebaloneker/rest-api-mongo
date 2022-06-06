import mongoose from "mongoose";

mongoose.connect(
    `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_MONGO_PORT}`,

    (err) => { if (err) { throw err } }
)
mongoose.Promise = global.Promise
export { mongoose }