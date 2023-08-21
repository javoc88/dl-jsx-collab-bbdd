import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseColaboradores } from "./database/BaseColaboradores";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario"

function App() {
  return (
    <>
      <Listado collabs={BaseColaboradores} />
      <Formulario/>
    </>
  );
}

export default App;
