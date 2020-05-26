import React, { createContext, useEffect, useState } from "react";
import { useDatabase } from "./database";

const INITIAL_STATE = {
  categorias: {},
  anuncios: {},
};

const store = createContext(INITIAL_STATE);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [data, setData] = useState(INITIAL_STATE);
  const categorias = useDatabase("categorias");
  const anuncios = useDatabase("anuncios");
  useEffect(() => {
    setData({ ...data, categorias: categorias, anuncios: anuncios });
  }, [anuncios]);
  return <Provider value={{ data }}>{children}</Provider>;
};

export { store, StateProvider };
