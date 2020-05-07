import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NovoAnuncio from "./NovoAnuncio";
import Footer from "./Footer";
function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/novo-anuncio" exact component={NovoAnuncio} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
