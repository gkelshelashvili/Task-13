import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data'
const FactPage = () => {
  const {faceId} = useParams()
  return (
    <div>
      <h1>facts</h1>

      {data.filter(({id}) => id === parseInt(faceId))
           .map(({id, fact}) => (
        <div key={id}>
          <h1>{fact}</h1>
        </div>
      ))}
    </div>
  )
}

export default FactPage