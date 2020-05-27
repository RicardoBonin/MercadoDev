import React from "react";

const Categoria = (props) => {
  console.log(props);
  return <h1>Categoria: {JSON.stringify(props.match.params.id)}</h1>;
};
export default Categoria;
