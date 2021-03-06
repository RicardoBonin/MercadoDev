import React from "react";
import { StateProvider } from "./store";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NovoAnuncio from "./NovoAnuncio";
import Categorias from "./Categorias";
import Footer from "./Footer";
function App() {
  return (
    <StateProvider>
      <Router>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/novo-anuncio" exact component={NovoAnuncio} />
          <Route path="/categorias" component={Categorias} />
          <Footer />
        </div>
      </Router>
    </StateProvider>
  );
}

export default App;
