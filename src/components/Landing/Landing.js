import '../Landing/Landing.scss';
import landingDesign from '../../images/landing_design.png';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <main class="main">
      <div class="main_logo">
        <img
          class="main__logo--img"
          src={landingDesign}
          alt="Logo crea tu tarjeta"
          title="Logo crea tu tarjeta"
        />
      </div>
      <section class="main__text">
        <h1 class="main__text--title">Crea tu tarjeta de visita</h1>
        <p class="main__text--description">
          Crea mejores contactos profesionales de forma fácil y cómoda
        </p>
      </section>
      <section>
        <ul class="main__images">
          <li class="main__images--icon">
            <i
              class="fa fa-object-ungroup main__images--icon-image"
              aria-hidden="true"
            ></i>
            <span class="main__images--icon-name"> Diseña </span>
          </li>
          <li class="main__images--icon">
            <i
              class="fa fa-keyboard-o main__images--icon-image"
              aria-hidden="true"
            ></i>
            <span class="main__images--icon-name"> Rellena</span>
          </li>
          <li class="main__images--icon">
            <i
              class="fa fa-share-alt main__images--icon-image"
              aria-hidden="true"
            ></i>
            <span class="main__images--icon-name"> Comparte </span>
          </li>
        </ul>
      </section>
      <Link to="/home">
        <div class="main__button">
          <a
            class="main__button--link"
            href="./cards.html"
            title="Ir a crear tu tarjeta de visita"
          >
            Comenzar
          </a>
        </div>
      </Link>
    </main>
  );
};

export default Landing;
