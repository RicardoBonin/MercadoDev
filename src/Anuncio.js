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
    <div className="text-center">
      <h1>{state.anuncio.nome}</h1>
      <p>
        <img src={state.anuncio.foto} className="img-fluid img-thumbnail" />
      </p>
      <div className="card-body">
        <h4 className="card-title">
          <h3>{state.anuncio.nome}</h3>
        </h4>
        <h5>preco</h5>
        <p className="card-text">{state.anuncio.descricao}</p>
      </div>
    </div>
  );
};

export default Anuncio;
