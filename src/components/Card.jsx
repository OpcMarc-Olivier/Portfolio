import React from 'react'
import '../sass/components/card.scss';

function Card({ project, id }) {
  const { title, cover } = project;

  return (
    // Utilisation de React Router DOM pour créer un lien réactif vers la page spécifique de chaque projet en fonction de son id
    <a href={`/${id}`} className="projectCard">
      <h2>{title}</h2>
      <span></span>
      <img src={cover} alt={title} />
    </a>
  );
}

export default Card;
