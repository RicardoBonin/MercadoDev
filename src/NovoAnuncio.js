import React, { useState, useContext } from "react";
import HeaderInterno from "./HeaderInterno";
import { useDataBasePush } from "./database";
import { storage } from "./firebase";
import { store } from "./store";
const INITTIAL_STATE = {
  nome: "",
  descricao: "",
  categoria: "",
  preco: "",
  telefone: "",
  vendedor: "",
  foto: "",
};
const NovoAnuncio = () => {
  const [state, setState] = useState(INITTIAL_STATE);
  const [file, setFile] = useState("");
  const { data } = useContext(store);
  const [, save] = useDataBasePush("anuncios");
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState({ ...state, [name]: value });
  };
  const fileOnChange = (evt) => {
    setFile(evt.target.files[0]);
  };
  const createNewAnnouncement = async () => {
    const { name } = file;
    const ref = storage.ref(name);
    await ref.put(file).then((img) => {
      console.log(img);
    });
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
  };
  console.log(data);
  return (
    <div>
      <HeaderInterno />
      <div className="container" style={{ paddingTop: "120px" }}>
        <h1>Novo Anúcio</h1>
        <form>
          <div className="form-froup">
            <label htmlFor="foto">Foto</label>
            <input
              type="file"
              className="form-control"
              name="foto"
              onChange={fileOnChange}
              id="foto"
              placeholder="Foto"
            />
          </div>
          <div className="form-froup">
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
          <div className="form-froup">
            <label htmlFor="nome">Categoria</label>
            <select onChange={handleChange}>
              {Object.keys(data.categorias).map((categoria) => (
                <option value={categoria.url}>
                  {data.categoria[categoria]}
                </option>
              ))}
            </select>
          </div>
          <div className="form-froup">
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
          <div className="form-froup">
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
          <div className="form-froup">
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
          <div className="form-froup">
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
