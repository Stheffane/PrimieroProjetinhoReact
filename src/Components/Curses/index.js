import React from 'react'
import Title from '../Title'
import SubTitle from '../SubTitle'
import ListCurses from '../ListCurses'

const cursos = [
  {
    instituicao: 'Udemy',
    certificacao: [
      'Imersão em HTML e CSS',
      'Git e Github para iniciantes',
      'Técnicas de gestão de tempo',
    ],
  },
  {
    instituicao: 'Origamid',
    certificacao: ['Adobe xd', 'Web Design Completo'],
  },
  {
    instituicao: 'Google',
    certificacao: ['Analytics', 'Tag Mananger'],
  },
]

const Curses = () => {
  return (
    <div className="row">
      <Title text="Cursos" />
      {cursos.map((item, index) => (
        <>
          <SubTitle text={item.instituicao} key={index} />
          <ListCurses certificado={item.certificacao} />
        </>
      ))}
    </div>
  )
}

export default Curses
