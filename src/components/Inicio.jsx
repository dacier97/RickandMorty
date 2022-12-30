import React, { useEffect, useState } from "react";
import {todosLosPersonajes} from "../funciones/funciones";

const Inicio = () => {
  const [Personajes, setPersonajes] = useState(null);
  
  useEffect(() => {
    todosLosPersonajes(setPersonajes);
    
  }, []);
  console.log(Personajes)
  return (
    <>
      {Personajes != null
        ? Personajes.map((personaje) => (
            <div key={personaje.id}>
              <a href={`/personaje/${personaje.id}`}>{personaje.name}</a>
            </div>
          ))
        : "no hay personajes"}
    </>
  );
};

export default Inicio;
