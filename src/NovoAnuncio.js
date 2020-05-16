import React, { useState, useContext, useRef } from "react";
import HeaderInterno from "./HeaderInterno";
import { useDataBasePush } from "./database";
import { storage } from "./firebase";
import { store } from "./store";
import { Redirect } from "react-router-dom";
const INITTIAL_STATE = {
  nome: "",
  descricao: "",
  categoria: "automoveis",
  preco: "",
  telefone: "",
  vendedor: "",
  foto: "",
  success: false,
};
const NovoAnuncio = () => {
  const [state, setState] = useState(INITTIAL_STATE);
  const [file, setFile] = useState();
  const { data } = useContext(store);
  const [, save] = useDataBasePush("anuncios");
  const imageInputRef = useRef();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState({ ...state, [name]: value });
    console.log(state);
  };
  const fileOnChange = (evt) => {
    setFile(evt.target.files[0]);
  };

  const createNewAnnouncement = async () => {
    const { name } = file;
    const ref = storage.ref(name);
    await ref.put(file);
    await storage
      .ref()
      .child(file.name)
      .getDownloadURL()
      .then((url) => {
        if (state) {
          save({
            nome: state.nome,
            descricao: state.descricao,
            categoria: state.categoria,
            preco: state.preco,
            telefone: state.telefone,
            vendedor: state.vendedor,
            foto: url,
          });
          console.log(state);
        }
      });
    setState(INITTIAL_STATE);
    imageInputRef.current.value = "";
    setState({ ...state, success: true });
  };
  return state.success ? (
    <Redirect to="/" />
  ) : (
    <div>
      <HeaderInterno />
      <div className="container" style={{ paddingTop: "120px" }}>
        <h1>Novo Anúcio</h1>
        <form>
          <div className="form-group">
            <label htmlFor="foto">Foto</label>
            <input
              type="file"
              className="form-control"
              name="foto"
              ref={imageInputRef}
              value={state.foto}
              onChange={fileOnChange}
              id="foto"
              placeholder="Foto"
            />
          </div>
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              className="form-control"
              name="nome"
              value={state.nome}
              onChange={handleChange}
              id="nome"
              placeholder="Nome"
            />
          </div>
          <div className="form-group">
            <label htmlFor="categoria">Categoria</label>
            <select
              className="form-control"
              onChange={handleChange}
              name="categoria"
              value={state.categoria}
            >
              {Object.keys(data.categorias).map((categoria) => (
                <option key={categoria} value={data.categorias[categoria].url}>
                  {data.categorias[categoria].categoria}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="descricao">Descrição</label>
            <input
              type="text"
              className="form-control"
              name="descricao"
              value={state.descricao}
              onChange={handleChange}
              id="descricao"
              placeholder="Descrição"
            />
          </div>
          <div className="form-group">
            <label htmlFor="preco">Preço</label>
            <input
              type="text"
              className="form-control"
              name="preco"
              value={state.preco}
              onChange={handleChange}
              id="preco"
              placeholder="Preço"
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="text"
              className="form-control"
              name="telefone"
              value={state.telefone}
              onChange={handleChange}
              id="telefone"
              placeholder="Telefone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="vendedor">Vendedor</label>
            <input
              type="text"
              className="form-control"
              name="vendedor"
              value={state.vendedor}
              onChange={handleChange}
              id="vendedor"
              placeholder="Vendedor"
            />
          </div>
          <button
            type="button"
            className="btn btn-primary mt-4"
            onClick={createNewAnnouncement}
          >
            Salvar Anúncio
          </button>
        </form>
      </div>
    </div>
  );
};
export default NovoAnuncio;
