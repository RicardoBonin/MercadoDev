import React from 'react'
import HeaderHome from './HeaderHome'
import AnuncioHome from './AnuncioHome'
import Footer from './Footer'
import LinkCategoria from './LinkCategoria'
import { useDatabase } from './database'

function App() {
  const data = useDatabase('mercadodev-c70f7')
  
  return (
    <div className="App">
      <HeaderHome />
      <div className='container'>
        <h3>Útimos Anúncios</h3>
        <div className='row'>
          <AnuncioHome />
          <AnuncioHome />
          <AnuncioHome />
        </div>
        <h3>Categorias</h3>
        <div className='row'>
          <LinkCategoria categoria={{categoria: 'Olá', 'icon': 'fa-lightbulb-o'}} />
          <LinkCategoria categoria={{categoria: 'Olá', 'icon': 'fa-lightbulb-o'}} />
          <LinkCategoria categoria={{categoria: 'Olá', 'icon': 'fa-lightbulb-o'}} />
          <LinkCategoria categoria={{categoria: 'Olá', 'icon': 'fa-lightbulb-o'}} />
        </div>
      </div>
      <Footer />
      <p>44min aula</p>
    </div>
  )
}

export default App
