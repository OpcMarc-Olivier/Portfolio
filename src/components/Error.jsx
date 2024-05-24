import React from 'react'
import '../sass/components/error.scss'

function Error() {
  return (
    <div className="main">
      <div className="errorMessage">
        <h2>404</h2>
        <h3>Oups! La page que vous demandez n'existe pas.</h3>
        <a href="/portfolio/">Retourner sur la page d’accueil</a>
      </div>
    </div>
  );
}

export default Error