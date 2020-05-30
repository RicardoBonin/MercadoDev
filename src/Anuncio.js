import React, { useState, useEffect } from "react";
import axios from "axios";

const Anuncio = (props) => {
  console.log(props.props.match.params.idAnuncio);
  const [state, setState] = useState({ anuncio: {}, isLoding: true });
  const id = props.props.match.params.idAnuncio;
  const url = `https://mercadodev-c70f7.firebaseio.com/anuncios/${id}.json`;
  useEffect(() => {
    axios.get(url).then((data) => {
      setState({ ...state, anuncio: data.data, isLoding: false });
    }, []);
  });

  if (state.isLoding) {
    return <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>;
  }

  return (
    <div>
      <h1>{state.anuncio.nome}</h1>
      <p>
        <img src={state.anuncio.foto} />
      </p>
    </div>
  );
};

export default Anuncio;
