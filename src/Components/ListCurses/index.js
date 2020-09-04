import React from 'react'
import './style.css'

const ListCurses = (props) => {
  return (
    <ul>
      {props.certificado.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

export default ListCurses
