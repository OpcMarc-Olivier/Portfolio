import React from 'react'
import '../sass/components/ficheTitle.scss'

function FicheTitle({ title, mission }) {
  return (
    <div className="titleDescription">
      <h3>{title}</h3>
      <p>{mission}</p>
    </div>
  );
}

export default FicheTitle