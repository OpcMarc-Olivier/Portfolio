import React from 'react'
import '../sass/components/button.scss'

function Button({ link, text, className }) {
  return (
    <div>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={`button ${className}`}
        cursor="pointer"
      >
        {text}
      </a>
    </div>
  );
}

export default Button