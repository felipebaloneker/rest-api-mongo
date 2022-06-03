import 'dotenv'
import express from 'express'

import './database'

const PORT = process.env.PORT || 3000

const server = express()

server.use(express.json())
server.listen(PORT, () => { console.log("server running") })