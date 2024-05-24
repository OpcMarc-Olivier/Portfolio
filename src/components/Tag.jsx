import React from 'react'
import '../sass/components/tag.scss'

function Tag({ tags }) {
  return (
    <div className="tags">
      {/* Utilisation de map pour itérer sur le tableau de tags */}
      {tags.map((tag, index) => (
        <p key={index}>{tag}</p>
      ))}
    </div>
  );
}

export default Tag