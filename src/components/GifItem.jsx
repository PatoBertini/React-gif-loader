import React from "react";

const GifItem = ({image}) => {
  return (
    <div key={image.id} className='card'>
      <img src={image.url} alt="" />
      <h3>Name: {image.title}</h3>
      <h5>ID: {image.id}</h5>
    </div>
  );
};

export default GifItem;
