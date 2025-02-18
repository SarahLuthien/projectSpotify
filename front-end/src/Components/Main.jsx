import React from "react";
import ItemList from "./ItemList.jsx";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = ({ type }) => {
  return (
    <div className="main">
      <div className="item-list">
        {/* Item list Artistas */}
        {type === "artists" || type === undefined ? (
          <ItemList
            title="Artistas"
            items={5}
            itemsArray={artistArray}
            path="/artists"
            idPath="/artist"
          />
        ) : (
          <></>
        )}

        {/* Item list Musicas */}
        {type === "songs" || type === undefined ? (
          <ItemList
            title="Musicas"
            items={10}
            itemsArray={songsArray}
            path="/songs"
            idPath="/song"
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Main;
