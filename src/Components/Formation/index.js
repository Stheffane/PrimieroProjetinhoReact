import React from 'react'
import Title from '../Title'
import SubTitle from '../SubTitle'
import Descripition from '../Descripition'

const formations = [
  {
    curse: 'Análise e Desenvolvimento de Sistemas',
    descripition: {
      instituto: 'Fatec',
      inicio: '99/09/2018',
      final: '09/99/2020',
      cursando: '0° Semestre',
      periodo: 'manhã/noite',
    },
  },
]

const Formation = () => {
  return (
    <div className="row">
      <Title text="Formação" />
      {formations.map((itens, index) => (
        <>
          <SubTitle text={itens.curse} key={index} />
          <Descripition dados={itens.descripition} />
        </>
      ))}
    </div>
  )
}

export default Formation
