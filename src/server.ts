import 'dotenv'
import express from 'express'

import router from "./routes/userRoutes"
import './database'

const PORT = process.env.PORT || 3000

const server = express()

server.use(express.json())
server.use(router)

server.listen(PORT, () => { console.log("server running") })