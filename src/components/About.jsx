import React from 'react'
import Button from './Button';
import '../sass/components/about.scss'
import portrait from '../assets/images/portrait-cercle-marco-2024.webp'
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
} from 'react-icons/fa';

function About() {
      const pdfPath = process.env.PUBLIC_URL + '/marc-olivier-perrois-cv-2023.pdf';
  return (
    <div className='aboutMe'>
        <div className="about__content">
        <img src={portrait} alt="Portrait Maria Carrera" />
        <div>
          <p>
            Issu du domaine audiovisuel, dans lequel j'ai travaillé en qualité
            d'opérateur de prise de vue pendant un quinzaine d'années, je suis 
            actuellement en reconversion professionnelle. Ma passion pour le 
            travail de l'image en général m'a conduit à explorer d'autres domaines 
            tel que l'illustration à titre personnel, le graphisme puis plus 
            récemment le developpement web. De nature curieux et passionné, je
            me lance toujours avec enthousiasme dans de nouveaux apprentissages.
          </p>
          
        </div>
      </div>
      <div className="about__competences">
        <h3>Mes compétences</h3>
        <div className="about__competences__icones">
          <FaCss3Alt />
          <FaHtml5 />
          <FaReact />
          <FaJsSquare />
          <FaNodeJs />
          <FaGithub />
        </div>
      </div>
      <Button link={pdfPath} text={'VOIR MON CV'} className={'white'} />
    </div>
  )
}

export default About