import express from "express";
import cors from "cors";
import { db } from "./conect.js";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (request, response) => {
  response.send("Olá mundo! Estou escrevendo");
});

app.get("/artist", async (request, response) => {
  response.send(await db.collection("artist").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando  na porta ${PORT}`);
});
