import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data'

export const AboutPage = () => {
  const {aboutId} = useParams()
  return (
    <div>
      <h1>
        about
      </h1>
      {data
        .filter(({id}) => id === parseInt(aboutId))
        .map(({ id,charaname, about}) => (
          <div key={id}>
            <h3>{charaname}</h3>
            <h3>{about}</h3>
          </div>
        ))}
    </div>

  )
}

export default AboutPage