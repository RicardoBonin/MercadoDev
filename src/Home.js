import React, { useContext } from "react";
import AnuncioHome from "./AnuncioHome";
import LinkCategoria from "./LinkCategoria";
import HeaderHome from "./HeaderHome";
import { store } from "./store";

const Home = () => {
  const { data } = useContext(store);
  let index = 0;
  console.log(data);
  return (
    <div>
      <HeaderHome />
      <div className="container">
        <h3>Útimos Anúncios</h3>
        <div className="row">
          {Object.keys(data.anuncios).map((anuncio) => {
            return (
              <AnuncioHome key={anuncio} anuncio={data.anuncios[anuncio]} />
            );
          })}
        </div>
        <h3>Categorias</h3>
        <div className="row">
          {Object.keys(data.categorias).map((cat) => {
            console.log(data.categorias[cat].categoria);
            return [
              <LinkCategoria key={cat} categoria={data.categorias[cat]} />,
              ++index % 4 === 0 && (
                <div key={"c" + cat} className="w-100"></div>
              ),
            ];
          })}
          <span>30 min aula 2</span>
        </div>
      </div>
    </div>
  );
};
export default Home;
