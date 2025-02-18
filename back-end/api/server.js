import express from "express";
import cors from "cors";
import { db } from "./conect.js";
import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/", (request, response) => {
  response.send("Olá mundo! Estou escrevendo");
});

app.get("/api/artist", async (request, response) => {
  response.send(await db.collection("artist").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "..", "front-end", "dist")));

app.get("*", async (request, response) => {
  response.sendFile(
    path.join(__dirname, "..", "front-end", "dist", "index.html")
  );
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando  na porta ${PORT}`);
});
