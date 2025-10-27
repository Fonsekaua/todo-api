import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const server = express();
const PORT = process.env.PORT;

server.use('/',(req,res) => {
    res.send("Modulo: Integrando node com banco de dados")
});

server.listen(PORT,() => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
});

