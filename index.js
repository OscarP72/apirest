const express= require("express");
const dotenv = require("dotenv");
dotenv.config();
const connect= require("./src/utils/db");

const server= express();

connect();

server.use(express.json());
server.use(express.urlencoded({extended: false}));

server.use("*",(req, res)=>{
    res.end("Route not found");
});

const PORT= process.env.PORT
server.listen(PORT, ()=>{
    console.log (`server running on http://localhost:${PORT}`)
})