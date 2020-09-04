import React from 'react'
import './style.css'

const Descripition = (props) => {
  return (
    <>
      <p className="descricao">{props.dados.instituto}</p>
      <p className="descricao">Início: {props.dados.inicio}</p>
      <p className="descricao">Cursando: {props.dados.cursando}</p>
      <p className="descricao">Previsão de Conclusão: {props.dados.final}</p>
      <p className="descricao">Período: {props.dados.periodo}</p>
    </>
  )
}

export default Descripition
