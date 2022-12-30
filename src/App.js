import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Personaje from "./components/Personaje";

function App() {
  return (
    <div className="contenedor">
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path='personaje/:id' element= {<Personaje />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
