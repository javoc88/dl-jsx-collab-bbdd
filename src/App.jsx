import { useState } from "react"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseColaboradores } from "./database/BaseColaboradores";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario"
import Alert from "./components/Alert"
import Buscador from "./components/Buscador"

function App() {
  const [alert, setAlert] = useState({ msg: "", color: "" });
  const [collabs, setCollabs] = useState(BaseColaboradores);
  const [search, setSearch] = useState("")

  const handleChange = (e) =>{
    setSearch(e.target.value)
  }

  const filteredCollabs = collabs.filter((c) => {
    if(
    c.nombre.toLowerCase().includes(search.toLowerCase()) ||
    c.correo.toLowerCase().includes(search.toLowerCase()) ||
    c.edad.toLowerCase().includes(search.toLowerCase()) ||
    c.cargo.toLowerCase().includes(search.toLowerCase()) ||
    c.telefono.toLowerCase().includes(search.toLowerCase())
    ) {
      return true;
    }
    return false;
  });

  const handleSubmit = (nuevoColaborador) => {
    const colaboradorConId = {
      ...nuevoColaborador,
      id: collabs.length + 1,
     };
     setCollabs([...collabs, colaboradorConId]);
  }

  return (
    <>
    <h1>Lista de Colaboradores</h1>
      <Buscador onChange={handleChange} search={search} />
      <Listado collabs={filteredCollabs} />
      <Formulario onSubmit={handleSubmit} setAlert={setAlert}/>
      {alert.msg && <Alert msg={alert.msg} color={alert.color} />}
    </>
  );
}

export default App;
