import axios from "axios";

const endPoint = 'https://rickandmortyapi.com/api/character/'


const todosLosPersonajes = async (st) => {
  const peticion = await axios.get(endPoint);
  console.log(peticion)
  st(peticion.data.results);
};

const unicoPersonaje = async (id, state) => {
  const peticion = await axios.get(
    /*`https://rickandmortyapi.com/api/character/${id}`*/
    endPoint + id
    
  );
  state(peticion);
  
};

export { todosLosPersonajes, unicoPersonaje };
