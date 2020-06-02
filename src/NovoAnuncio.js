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
  error: "",
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
  console.log(file);
  const createNewAnnouncement = async () => {
    try {
      if (
        state.nome.length === 0 ||
        state.descricao.length === 0 ||
        state.preco.length === 0 ||
        state.telefone.length === 0 ||
        state.vendedor.length === 0 ||
        file === undefined
      ) {
        setState({
          ...state,
          error: "[ERRO] Por favor, preencha todos os campos!",
        });
        setTimeout(() => {
          setState({
            ...state,
            error: "",
          });
        }, [5000]);
      } else {
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
            }
          });
        setState(INITTIAL_STATE);
        imageInputRef.current.value = "";
        setState({ ...state, success: true });
      }
    } catch (err) {
      setState({ ...state, error: "Error" });
      console.log(err);
    }
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
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="categoria">Categoria</label>
            <select
              className="form-control"
              onChange={handleChange}
              name="categoria"
              value={state.categoria}
              required
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
              required
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
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="tel"
              className="form-control phone-mask"
              name="telefone"
              value={state.telefone}
              onChange={handleChange}
              id="telefone"
              placeholder="Telefone"
              required
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
              required
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
        {state.error.length > 0 && (
          <div className="alert alert-danger mt-4" role="alert">
            {state.error}
          </div>
        )}
      </div>
    </div>
  );
};
export default NovoAnuncio;
