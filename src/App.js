import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { config } from "./config/config";
import { FormFile } from "./components/FormFile";

function App() {
  const [errorBackend, setErrorBackend] = useState(false);

  useEffect(() => {
    // Vamos a valiar la salud del Backend en el caso de no estar funcionando el backend informar
    const API = config.prod.API_URL;
    axios
      .get(`${API}/health-check`)
      .then((res) => {
        console.log("everything is ok");
      })
      .catch((err) => {
        console.log("Error al intentar comunicarse con el backend");
        setErrorBackend(true);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Extractor de horas extras</h1>
        {errorBackend ? (
          <h3 className="error">
            Hay un error con la API, por favor contacte al administrador ❌
          </h3>
        ) : <h3>Todo esta Ok con el servidor ✅</h3>}
      </header>
      <div className="content">
        <p>Puedes adjuntar varios archivos para extraer las horas extras</p>

        <div className="card-custom">
          <h2>Extraer &rarr;</h2>
          <p>
            Cuando se termine de procesar los archivos se te retorna un archivo
            comprimido en ZIP con los planos correspondientes
          </p>
          <FormFile></FormFile>
        </div>
      </div>
      <footer className="footer">
        <p>Powered by Paul Cortes</p>
      </footer>
    </div>
  );
}

export default App;
