import React from "react";

function Hola2({ recipe }) {
  return (
    <div>
      {recipe?.map((r) => (
        <div key={r.id}>
          <h1 key={r.name} >{r.name}</h1>
          <img src={r.image} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Hola2;
