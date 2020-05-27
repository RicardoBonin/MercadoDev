import React, { useContext } from "react";
import HeaderInterno from "./HeaderInterno";
import { store } from "./store";
import { Link, Route } from "react-router-dom";
import Categoria from "./Categoria";

const Categorias = () => {
  const { data } = useContext(store);
  console.log(data.categorias.categoria);
  return (
    <div>
      <HeaderInterno />
      <div className="container" style={{ paddingTop: "120px" }}>
        <h1>Categorias</h1>
        <pre>{JSON.stringify(data.categorias)}</pre>
        <div className="row">
          <div className="col-lg-4">
            <ul>
              {Object.keys(data.categorias).map((categoria) => {
                return (
                  <li key={categoria}>
                    <Link
                      to={`/categorias/${data.categorias[categoria].url}`}
                      replace
                    >
                      {data.categorias[categoria].categoria}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-lg-8">
            <Route path={"/categorias/:id"} component={Categoria} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Categorias;
