import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/SobreNosotros.css";
const SobreNosotros = () => {
  return (
    <div>
      <Header />
      <div class="container pt-5 mt-5">
        <h2>Sobre Nosotros</h2>
        <p>
          Somos un grupo de apasionados estudiantes universitarios dedicados a
          promover y celebrar la riqueza de nuestra hermosa región. Nuestra
          misión es compartir la belleza, la cultura y la gastronomía de esta
          zona con el mundo.
        </p>

        <p>
          Nos encontramos en el corazón de esta región y creemos que es un lugar
          único lleno de tesoros por descubrir. A través de nuestro proyecto,
          queremos inspirar a otros a explorar y apreciar todo lo que nuestra
          región tiene para ofrecer.
        </p>
        <div className="VisMin">
          <div className="mision">
            <h2>Nuestra Misión</h2>
            <p>
              Nuestra misión es inspirar a las personas a explorar y
              experimentar la diversidad de nuestra región. Creemos que viajar
              es una forma de aprendizaje enriquecedora que permite a las
              personas conectar con culturas diversas y saborear las delicias
              culinarias locales.
            </p>
            <p>
              Trabajamos incansablemente para proporcionar información precisa y
              emocionante sobre los lugares turísticos, la cultura, la
              gastronomía y mucho más en nuestra región. Queremos que todos
              disfruten de esta experiencia única y se sumerjan en la magia de
              nuestra herencia cultural.
            </p>
          </div>
          <div className="vision">
            <h2>Nuestra Visión</h2>
            <p>
              Nuestra visión es convertirnos en un recurso líder en la promoción
              y exploración de nuestra región. Queremos ser reconocidos como un
              equipo apasionado que inspira a las personas a descubrir la
              riqueza cultural, la belleza natural y la diversidad gastronómica
              que nuestra región tiene para ofrecer.
            </p>
          </div>
        </div>

        <h2>Lo Que Queremos Lograr</h2>
        <p>Queremos lograr lo siguiente con nuestro proyecto:</p>
        <ul>
          <li>
            Compartir la cultura única y las tradiciones de nuestra región con
            una audiencia global.
          </li>
          <li>Promover el turismo sostenible y responsable en nuestra área.</li>
          <li>
            Destacar los destinos turísticos menos conocidos y auténticos de
            nuestra región.
          </li>
          <li>
            Facilitar el acceso a información precisa y útil para los viajeros
            interesados en visitar nuestra región.
          </li>
        </ul>

        <h2>Dar a Conocer</h2>
        <p>
          Nuestra plataforma está diseñada para dar a conocer la riqueza de
          nuestra región a través de:
        </p>
        <ul>
          <li>Artículos y guías detalladas sobre lugares turísticos.</li>
          <li>Exploración de la cultura local, festivales y eventos.</li>
          <li>Reseñas de restaurantes y platos tradicionales.</li>
          <li>
            Historias inspiradoras de viajeros que han experimentado nuestra
            región.
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default SobreNosotros;
