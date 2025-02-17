import React from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

function ItemList({ title, items, itemsArray, path, idPath }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const finalItens = isHome ? items : Infinity;
  return (
    <>
      <div className="item-list__header">
        <h2>{title} Populares</h2>
        {isHome ? (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>
      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < finalItens)
          .map((currObj, index) => (
            <SingleItem
              {...currObj}
              idPath={idPath}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </>
  );
}

export default ItemList;
