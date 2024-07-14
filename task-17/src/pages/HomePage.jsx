import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import data from '../data'

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div>
      {data.map(({id, charaname, about,factId}) => (
        <div key={id}>
          <h3>{charaname}</h3>
          <h3>{about}</h3>
          <div>
            <button onClick={() => {
              factId ? navigate(`/fact/${factId}`) : navigate("/404")
            }}>fact</button>
            <Link to={`/about/${id}`}>
              show more
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomePage