import React, { useContext } from "react";
import HeaderInterno from "./HeaderInterno";
import { store } from "./store";
import { Link, Route } from "react-router-dom";
import Categoria from "./Categoria";
import Anuncio from "./Anuncio";

const Categorias = () => {
  const { data } = useContext(store);
  return (
    <div>
      <HeaderInterno />
      <div className="container" style={{ paddingTop: "120px" }}>
        <h1>Categorias</h1>
        <div className="row">
          <div className="col-lg-4">
            <div className="list-group">
              {Object.keys(data.categorias).map((categoria) => {
                return (
                  <a key={categoria}>
                    <Link
                      className="list-group-item list-group-item-action"
                      to={`/categorias/${data.categorias[categoria].url}`}
                      replace
                    >
                      {data.categorias[categoria].categoria}
                    </Link>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="col-lg-8">
            <Route path="/categorias/:id" exact component={Categoria} />
            <Route
              path="/categorias/:id/:idAnuncio"
              render={(props) => <Anuncio props={props} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Categorias;
