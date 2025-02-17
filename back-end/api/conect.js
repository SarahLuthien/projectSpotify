import { MongoClient } from "mongodb";

const username = encodeURIComponent("sarapires-dev");
const password = encodeURIComponent("nkQWt39UjFmy5yV6");
const cluster = "<clusterName>";
const authSource = "<authSource>";
const authMechanism = "<authMechanism>";

const URI = `mongodb+srv://${username}:${password}@cluster0.vxjlm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
//Peguei esse link no site do mongo ao ir em Clusters > conection > data > inserir a senha que aparece em em databased access | edit | senha

const client = new MongoClient(URI);

export const db = client.db("spotifyProject");
// const songColletion = db.colletion("songs").find({}).toArray();
