import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1 className='text-danger'>HOME</h1>
        <Link to="/detalles">
            <button className='btn btn-primary'> IR A DETALLE</button>
        </Link>
    </div>
  )
}

export default Home
