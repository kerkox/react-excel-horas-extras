import "./App.css";
import { FormFile } from "./components/FormFile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Extractor de horas extras</h1>
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
