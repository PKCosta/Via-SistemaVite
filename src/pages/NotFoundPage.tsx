import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
      <h1>Essa Pagina nao Exite</h1>
      <Link to="/"> Voltar para a Home </Link>
    </div>
  )
}

export default NotFoundPage
