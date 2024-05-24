import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../sass/components/contact.scss'
import Button from './Button'
function Contact() {
  return (
    <div className='contactMe'>
      <p>
        N'hésitez pas à me contacter pour toute question, collaboration ou
        simplement pour discuter de projets passionnants !{' '}
      </p>
      <Button
        link="mailto:mo.perrois@gmail.com"
        text={'Contactez-moi'}
        className={'blue-green'}
      />
      <div className="contactMe__icons">
        <NavLink
          to=""
          target="_blank"
        >
          <FaLinkedinIn className="icon" />
        </NavLink>
        <NavLink to="https://github.com/OpcMarc-Olivier/Portfolio-Marc-Olivier.git" target="_blank">
          <FaGithub className="icon" />
        </NavLink>
      </div>

    </div>
  )
}

export default Contact