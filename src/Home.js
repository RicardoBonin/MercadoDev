import React from 'react'
import AnuncioHome from './AnuncioHome'
import LinkCategoria from './LinkCategoria'
import HeaderHome from './HeaderHome'
import {  useDatabase } from './database'

const Home = () => {
  const dataCategorias = useDatabase('categorias')
  const dataAnuncios = useDatabase('anuncios')
  const idsCat = Object.keys(dataCategorias)
  const idsAnun = Object.keys(dataAnuncios)
  let index = 0
  return (
    <div>
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
          <span>30 min aula 2</span>
        </div>
      </div>
    </div>
    
  )
}
export default Home