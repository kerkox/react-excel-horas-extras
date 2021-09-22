import axios from "axios";
import React, { useState } from "react";
import { config } from "../config/config";
import iconLoading from "../assets/img/sync-alt-solid.svg";
import "./FormFile.css";



export const FormFile = () => {
  const [archivos, setArchivos] = useState(null);
  const [loading, setLoading] = useState(false);

  const API = config.prod.API_URL;
  // const fileList = []

  const subirArchivos = (e) => {
    
    setArchivos(e.target.files);
  };

  const disabledButton = () => {
    return  loading || !archivos || archivos?.length <= 0;
  }

  const handleSubmit = async () => {
    // console.log("se llamo la funcion HandleSubmit");
    const form = new FormData();
    for (let index = 0; index < archivos.length; index++) {
      form.append(`files_${index}`, archivos[index]);
    }
    setLoading(true);
    await axios
      .post(`${API}/upload-excel`, form, {
        headers: { 
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin":"*" 
        },
      })
      .then((response) => {
        console.log(response.data);
        let code = response.data.data.code;
        window.open(`${API}/download-files/${code}`);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="form-file-custom">
      <p>Arrastra los archivos a subir</p>
      <input
        name="files_excel"
        type="file"
        multiple={true}
        onChange={subirArchivos}
      />
      {loading && (
        <div className="icon-loading">
          <img src={iconLoading} alt="icon loading" />
        </div>
      )}
      <button
        type="button"
        className="btn btn-primary"
        value="Subir"
        onClick={handleSubmit}
        disabled={disabledButton()}
      >
        Subir
      </button>
    </div>
  );
};
