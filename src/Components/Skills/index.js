import React from 'react'
import Title from '../Title'
import SubTitle from '../SubTitle'

const listSkills = ['css', 'html', 'react', 'js']

const Skills = () => {
  return (
    <div className="row last-row">
      <Title text="Skills" />
      <SubTitle text={listSkills.join(', ')} />
    </div>
  )
}

export default Skills
