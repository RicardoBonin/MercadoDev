import React, { useState, useEffect } from "react";
import axios from "axios";
import AnuncioHome from "./AnuncioHome";

const Categoria = (props) => {
  const [state, setState] = useState({ anuncios: {}, isLoading: false });
  const anuncios = props.match.params.id;
  const url = `https://mercadodev-c70f7.firebaseio.com/anuncios.json?orderBy=%22categoria%22&equalTo=%22${anuncios}%22`;

  const carregar = async () => {
    setState({ ...state, isLoading: true, anuncios: {} });
    const res = await axios.get(url);
    setState({ anuncios: res.data, isLoading: false });
  };
  useEffect(() => {
    carregar();
  }, [url]);

  return (
    <div>
      <h1>Categoria: {anuncios}</h1>
      {state.isLoading && (
        <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
      )}
      {!state.isLoading && Object.keys(state.anuncios).length === 0 && (
        <p>Nenhum produto cadastrado!</p>
      )}
      <div className="row">
        {Object.keys(state.anuncios).map((anuncio) => {
          return (
            <AnuncioHome
              key={anuncio}
              id={anuncio}
              anuncio={state.anuncios[anuncio]}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Categoria;
