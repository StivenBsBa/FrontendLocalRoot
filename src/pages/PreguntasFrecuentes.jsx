import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/PreguntasFrecuentes.css"; 

const PreguntasFrecuentes = () => {
  const preguntasFrecuentes = [
    {
      pregunta: "¿Cuál es la misión de nuestra organización cultural?",
      respuesta:
        "Nuestra organización tiene como misión promover y preservar la cultura local, fomentando la participación activa de la comunidad en eventos y actividades culturales."
    },
    {
      pregunta: "¿Cómo puedo unirme a nuestros eventos culturales?",
      respuesta:
        "Para unirte a nuestros eventos culturales, puedes consultar nuestra página de eventos y registrarte para participar. También puedes encontrar información sobre cómo involucrarte como voluntario."
    },
    {
      pregunta: "¿Cuál es el proceso de selección de artistas locales para actuar en nuestros eventos?",
      respuesta:
        "Seleccionamos artistas locales a través de un proceso de audición y evaluación. Animamos a los talentosos artistas locales a presentar sus propuestas y demostraciones para consideración."
    },
    {
      pregunta: "¿Cómo puedo contribuir con contenido a nuestro sitio web?",
      respuesta:
        "Puedes contribuir enviándonos artículos, fotos o noticias relacionadas con la cultura local. Contáctanos a través de la página de contacto para obtener más información sobre cómo colaborar."
    },
    {
      pregunta: "¿Cuáles son las políticas de privacidad de nuestro sitio web?",
      respuesta:
        "Nuestra política de privacidad se centra en proteger la información personal de los usuarios. Puedes consultar nuestra política de privacidad en el pie de página del sitio web."
    },
    {
      pregunta: "¿Cuáles son las ventajas de registrarse en nuestro sitio web?",
      respuesta:
        "Registrarse en nuestro sitio te permite recibir actualizaciones, participar en discusiones y contribuir con contenido. También te mantendrá informado sobre eventos y noticias culturales."
    },
    {
      pregunta: "¿Cómo se financian nuestros eventos culturales?",
      respuesta:
        "Nuestros eventos culturales se financian a través de donaciones, patrocinadores y la venta de boletos. También contamos con el apoyo de organizaciones culturales locales."
    },
    {
      pregunta: "¿Qué recursos ofrecemos para artistas locales emergentes?",
      respuesta:
        "Brindamos talleres, espacios de exhibición y oportunidades de presentación para artistas locales emergentes. Consulta nuestra sección 'Oportunidades para Artistas' para obtener más detalles."
    },
    {
      pregunta: "¿Cómo puedo recibir notificaciones sobre eventos futuros?",
      respuesta:
        "Puedes suscribirte a nuestro boletín informativo para recibir notificaciones por correo electrónico sobre eventos futuros y actualizaciones importantes."
    },
    {
      pregunta: "¿Cómo contactar al equipo de soporte en caso de problemas?",
      respuesta:
        "Si tienes alguna pregunta o enfrentas problemas, puedes ponerte en contacto con nuestro equipo de soporte a través de la página de 'Contáctanos'. Estamos disponibles para ayudarte con cualquier consulta que puedas tener."
    }
  ];
  

  return (
    <div>
      <Header />
      <div className="container">
        <h2>Preguntas Frecuentes</h2>
        <ul className="preguntas-frecuentes-list">
          {preguntasFrecuentes.map((item, index) => (
            <li key={index} className="pregunta-frecuente">
              <details className="pregunta-frecuente-details">
                <summary className="pregunta-frecuente-summary">
                  {item.pregunta}
                </summary>
                <p className="pregunta-frecuente-answer">{item.respuesta}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default PreguntasFrecuentes;
