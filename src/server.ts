import 'dotenv/config';
import express from 'express';

import router from './routes/userRoutes';
import './database/connection';

const PORT = process.env.PORT || 3000;

const server = express();

server.use(express.json());
server.use(router);

server.listen(PORT, () => {
    console.log('server running');
});
