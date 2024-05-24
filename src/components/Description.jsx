import React from 'react'
import '../sass/components/description.scss'

function Description({ title, content }) {
  return (
    <div className="description">
      <h4>{title}</h4>
      <div>
        {/* Création d'une nouvelle balise <p> après de chaque '\n' dans le texte*/}
        {content.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            <p>{line}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Description