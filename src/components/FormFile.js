import axios from "axios";
import React, { useState } from "react";
import { config } from "../config/config";
import "./FormFile.css";


export const FormFile = () => {
  const [archivos, setArchivos] = useState(null);

  const API = config.prod.API_URL;
  // const fileList = []

  const subirArchivos = (e) => {
    setArchivos(e.target.files);
  };

  const handleSubmit = async () => {
    console.log("se llamo la funcion HandleSubmit")
    const form = new FormData();
    for(let index = 0; index < archivos.length; index++){
      form.append(`files_${index}`,archivos[index])
    }

    await axios.post(`${API}/upload-excel`,form, {headers: {'Content-Type': 'multipart/form-data'}})
    .then(response => {
      console.log(response.data)
      let code = response.data.data.code
      window.open(`${API}/download-files/${code}`)
    })
    .catch(error => {
      console.log(error)
    })
  };

  return (
    <div className="form-file">
      <p>Arrastra los archivos a subir</p>
        <input
          name="files_excel"
          type="file"
          multiple={true}
          onChange={subirArchivos}
        />
        <button type="button" value="Subir" onClick={handleSubmit}>Subir</button>
      
    </div>
  );
};
