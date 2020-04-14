import React, { useState } from 'react'
import HeaderInterno from './HeaderInterno'
const INITTIAL_STATE = {
  nome: '',
  descricao: '',
  preco: '',
  telefone: '',
  vendedor: '',
  foto: 'http://placehold.it/200x140'
}
const NovoAnuncio = () => {
  const [state, setState] = useState(INITTIAL_STATE)

  const handleChange = evt =>{
    const { name, value } = evt.target
    setState({ ...state, [name]: value})
    console.log(state)
  }
  return (
    <div>
      <HeaderInterno />
      <div className='container' style={{paddingTop: '120px'}}>
        <h1>Novo Anúcio</h1>
        <form>
          <div className='form-froup'>
            <label htmlFor='nome'>Nome</label>
            <input type='text' className='form-control' name='nome' value={state.nome} onChange={handleChange} id='nome' placeholder='Nome' />
          </div>
          <div className='form-froup'>
            <label htmlFor='descricao'>Descrição</label>
            <input type='text' className='form-control' name='descricao' value={state.descricao} onChange={handleChange} id='descricao' placeholder='Descrição' />
          </div>
          <div className='form-froup'>
            <label htmlFor='preco'>Preço</label>
            <input type='text' className='form-control' name='preco' value={state.preco} onChange={handleChange} id='preco' placeholder='Preço' />
          </div>
          <div className='form-froup'>
            <label htmlFor='telefone'>Telefone</label>
            <input type='text' className='form-control' name='telefone' value={state.telefone} onChange={handleChange} id='telefone' placeholder='Telefone' />
          </div>
          <div className='form-froup'>
            <label htmlFor='vendedor'>Vendedor</label>
            <input type='text' className='form-control' name='vendedor' value={state.vendedor} onChange={handleChange} id='vendedor' placeholder='Vendedor' />
          </div>
          <button type='button' className='btn btn-primary'>Salvar Anúncio</button>
        </form>
      </div>
    </div>

  )
}
export default NovoAnuncio