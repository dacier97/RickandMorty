import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {unicoPersonaje} from '../funciones/funciones'

function Personaje() {
  const [personaje, setPersonaje] = useState(null);

  const params = useParams();
  useEffect(() => {
    unicoPersonaje(params.id, setPersonaje);
  }, []);

  console.log(personaje)
  return (  
    <>
      {personaje != null ? (
        <div>
          <h2>Personaje con el id {params.id}</h2>
          <p>el nombre del {personaje.data.name} </p>
          <img src={personaje.data.image} alt="" />
        </div>
      ) : (
        "sin personaje"
      )}
    </>
  );
}

export default Personaje;

