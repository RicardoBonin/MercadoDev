import React, { useState, useEffect } from "react";
import axios from "axios";
import AnuncioHome from "./AnuncioHome";

const url =
  "https://mercadodev-c70f7.firebaseio.com/anuncios.json?orderBy=%22categoria%22&equalTo=%22animais-e-acessorios%22";

const Categoria = (props) => {
  const [state, setState] = useState({ anuncios: {} });
  const anuncios = props.match.params.id;
  const url = `https://mercadodev-c70f7.firebaseio.com/anuncios.json?orderBy=%22categoria%22&equalTo=%22${anuncios}%22`;

  useEffect(() => {
    axios.get(url).then((res) => setState({ anuncios: res.data }));
  }, [url]);

  console.log(props);
  return (
    <div>
      <h1>Categoria: {JSON.stringify(anuncios)}</h1>;
      <div className="row">
        {Object.keys(state.anuncios).map((anuncio) => {
          return (
            <AnuncioHome key={anuncio} anuncio={state.anuncios[anuncio]} />
          );
        })}
      </div>
    </div>
  );
};
export default Categoria;
