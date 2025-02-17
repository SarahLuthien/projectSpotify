import "dotenv/config";
import axios from "axios";

const NODE_ENV = process.env.NODE_ENV;

const URL = NODE_ENV === "development" ? "http://localhost:3000/api" : "/api";

const responseArtist = await axios.get(`${URL}/artist`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtist.data;
export const songsArray = responseSongs.data;

console.log(responseArtist);
