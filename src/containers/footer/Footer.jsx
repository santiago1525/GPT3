import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
        ¿Quieres dar un paso hacia el futuro antes que los demás?
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Solicita Acceso Anticipado</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, <br /> Todos los Derechos Reservados</p>
        </div>
        <div className="gpt3__footer-links-div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Redes Sociales</p>
          <p>Contadores</p>
          <p>Contacto</p>
        </div>
        <div className="gpt3__footer-links-div">
          <h4>Compañia</h4>
          <p>Terminos y Condiciones</p>
          <p>Politica de Privacidad</p>
        </div> 
        <div className="gpt3__footer-links-div">
          <h4>Ponerse en Contacto</h4>
          <p>3134230339</p>
          <p>info@payme.net</p>
        </div> 
      </div>
      <div className="gpt3__footer-copyright">
        <p>@2023GPT-3. Reservados todos los derechos.</p>
      </div>
    </div>
  )
}

export default Footer