import React, { useContext } from "react";
import HeaderInterno from "./HeaderInterno";
import { store } from "./store";
import { Link, Route, Switch } from "react-router-dom";
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
            {Object.keys(data.categorias).map((categoria) => {
              console.log(data.categorias[categoria].url);
              return (
                <p key={categoria}>
                  <Link to={`/categorias/${data.categorias[categoria].url}`}>
                    {data.categorias[categoria].categoria}
                  </Link>
                </p>
              );
            })}
          </div>
          <div className="col-lg-8">
            <Switch>
              <Route path="/categorias/:id" component={Categoria} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Categorias;
