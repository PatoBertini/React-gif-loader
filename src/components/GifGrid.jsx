import React from "react";
// import { getGifs } from "../helpers/getGifs";
// import { useState, useEffect } from "react";
import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  // console.log({images,isLoading});

  return (
    <>
      {isLoading ? <h1>CARGANDO...</h1> : null}
      <div className="card-grid">
        {images.map((image) => {
          // aca podemos desestructurar image en ({id,title})

          return (
            <GifItem
              key={image.id}
              image={image}
              // si lo queres mandar desestructurado title={image.title}
              //{...image}-> sprayiamos las properties, ya las manda desestructurada
            />
          );
        })}
      </div>
    </>
  );
};

export default GifGrid;
