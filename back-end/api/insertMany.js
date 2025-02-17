import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { db } from "./conect.js";

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj.id;

  return newArtistObj;
});

const newSongArray = songsArray.map((currentSongObj) => {
  const newSongObj = { ...currentSongObj };
  delete newSongObj.id;

  return newSongObj;
});

const responseArtist = await db.collection("artist").insertMany(newArtistArray);
const responseSongs = await db.collection("songs").insertMany(newSongArray);

console.log(responseSongs);
console.log(responseArtist);
