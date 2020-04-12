import React from 'react'
import HeaderHome from './HeaderHome'
import AnuncioHome from './AnuncioHome'
import Footer from './Footer'
import LinkCategoria from './LinkCategoria'
import {  useDatabase } from './database'

function App() {
  const data = useDatabase('categorias')
  console.log(data)
  const ids = Object.keys(data)
  
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
          { ids.map( cat => {
            return <LinkCategoria categoria={{cat}} />
          })
          }
          <p>52</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
