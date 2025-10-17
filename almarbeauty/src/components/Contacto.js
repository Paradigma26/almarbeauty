import React from 'react';
import './Contacto.css';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Contacto() {
  return (
    <section className="contacto" id="contacto">
      <h2 className="contacto-title">Contáctanos</h2>
      <p className="contacto-text">
        ¡Nos encantaría saber de ti! Escríbenos por nuestras redes sociales.
      </p>

      <div className="contacto-redes">
        <a
          href="https://www.instagram.com/almarbeauty_pzo/"
          target="_blank"
          rel="noopener noreferrer"
          className="contacto-icon instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://wa.me/qr/BU6PNYFTUOGIL1"
          target="_blank"
          rel="noopener noreferrer"
          className="contacto-icon whatsapp"
        >
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
}

export default Contacto;
