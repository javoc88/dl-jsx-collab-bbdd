import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseColaboradores } from "./database/BaseColaboradores";
import Listado from "./components/Listado";

function App() {
  return (
    <>
      <Listado collabs={BaseColaboradores} />
    </>
  );
}

export default App;
