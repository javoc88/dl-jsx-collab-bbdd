import { useState } from "react"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseColaboradores } from "./database/BaseColaboradores";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario"
import Alert from "./components/Alert"

function App() {
  const [alert, setAlert] = useState({ msg: "", color: "" });
  return (
    <>
      <Listado collabs={BaseColaboradores} />
      <Formulario setAlert={setAlert}/>
      {alert.msg && <Alert msg={alert.msg} color={alert.color} />}
    </>
  );
}

export default App;
