import React from 'react'
import Text from '../Text'
import './style.css'

const itens_info = [
  'solterio, brasileiro, 01/03/2020',
  'Rua dos Bobo, nº 0',
  'Contato: (00) 08000-8080 (WhatsApp)',
  'CEP: 00000-000',
  'E-mail: cookie@blabla.com',
]

const Info = () => {
  return (
    <div className="row ordenar_infos">
      {itens_info.map((item, index) => (
        <Text texts={item} key={index} />
      ))}
    </div>
  )
}

export default Info
