import './Hero.css';
import banner from '../images/banner.jpg'

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="hero-content">
        <h1 className="hero-title">
          Bienvenida a <span>AlmarBeauty</span>
        </h1>
        <p className="hero-subtitle">
          Descubre la belleza en cada detalle con nuestra colección de maquillaje.
        </p>
        <a href="#productos" className="hero-button">Ver productos</a>
      </div>
    </section>
  );
}

export default Hero;
