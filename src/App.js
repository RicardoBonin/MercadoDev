import React from 'react'
import HeaderHome from './HeaderHome'
import AnuncioHome from './AnuncioHome'
import Footer from './Footer'
import LinkCategoria from './LinkCategoria'
import {  useDatabase } from './database'

function App() {
  const dataCategorias = useDatabase('categorias')
  const dataAnuncios = useDatabase('anuncios')
  const idsCat = Object.keys(dataCategorias)
  const idsAnun = Object.keys(dataAnuncios)
  let index = 0
  return (
    <div className="App">
      <HeaderHome />
      <div className='container'>
        <h3>Útimos Anúncios</h3>
        <div className='row'>
          { idsAnun.map( cat => {
            return <AnuncioHome key={cat} anuncio={dataAnuncios[cat]}/>
          })
          }
        </div>
        <h3>Categorias</h3>
        <div className='row'>
          { idsCat.map( cat => {
            return  [
                     <LinkCategoria key={cat} categoria={dataCategorias[cat]} />,
                     ++index%4 === 0 && <div key={'c'+cat} className='w-100'></div>
                    ]
          })
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
