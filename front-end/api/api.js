import axios from "axios";

const URL = "http://localhost:3000";

const responseArtist = await axios.get(`${URL}/artist`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtist.data;
export const songsArray = responseSongs.data;

console.log(responseArtist);
