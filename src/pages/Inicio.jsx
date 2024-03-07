import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../styles/Inicio.css";
// importaciones de imagenes
import Medellin from "../assets/Lugares/medellin.jpg";
import PiedraPeñol from "../assets/Lugares/PiedraPeñol.png";
import Pueblito from "../assets/Lugares/pueblitos.png";

const lugaresData = [
  {
    title: "Medellin",
    description:
      "Medellín, la 'Ciudad de la Eterna Primavera,' te sorprenderá con su clima agradable, paisajes montañosos y una transformación urbana sorprendente. Esta metrópolis combina historia, cultura y una vibrante escena artística en un entorno natural excepcional. ¡Descubre su encanto único!",
    image: Medellin,
  },
  {
    title: "La Piedra del Peñol",
    description:
      "La Piedra del Peñol, en Guatapé, Colombia, es un majestuoso monolito de granito que se alza 220 metros sobre el nivel del agua, ofreciendo vistas panorámicas espectaculares tras ascender sus 649 escalones. Es uno de los destinos turísticos más icónicos del país.",
    image: PiedraPeñol,
  },
  {
    title: "Guatapé",
    description:
      "Guatapé es un pintoresco pueblo en Colombia conocido por sus casas coloridas y la impresionante Piedra del Peñol, una formación de granito que ofrece vistas panorámicas espectaculares.",
    image: Pueblito,
  },
];

const categoryData = [
  {
    title: "Cultura y Arte",
    description:
      "Descubre un mundo de cultura y arte en cada rincón. Museos fascinantes, teatros emocionantes y eventos culturales únicos te esperan. Sumérgete en la creatividad y la expresión artística que definen nuestra comunidad. ¿Estás listo para una experiencia inigualable?",
  },
  {
    title: "Gastronomía",
    description:
      "Embárcate en un viaje culinario inolvidable mientras exploras la ecléctica diversidad gastronómica de nuestra ciudad. Desde exquisitos platos locales que te sumergirán en nuestra cultura hasta tentadoras opciones internacionales que satisfarán todos los paladares, cada bocado es una aventura que te conectará con los sabores del mundo. ¡Prepárate para un festín que deleitará tus sentidos y te dejará con ganas de más!",
  },
  {
    title: "Naturaleza y Aventura",
    description:
      "Sumérgete en la belleza natural que rodea nuestra ciudad y experimenta emocionantes aventuras al aire libre. Desde apacibles senderos de senderismo que te conectan con la naturaleza hasta la adrenalina de los deportes extremos que desafían tus límites, aquí encontrarás una variedad de oportunidades para explorar y disfrutar al máximo del entorno natural. ¡Prepárate para vivir emocionantes experiencias al aire libre que te llenarán de energía y asombro!",
  },
  {
    title: "Historia y Patrimonio",
    description:
      "Embárcate en un viaje en el tiempo mientras exploras la fascinante historia de nuestra ciudad a través de sus emblemáticos lugares históricos y monumentos. Cada piedra, cada callejón estrecho y cada monumento narra la historia rica y apasionante que ha dado forma a nuestra comunidad a lo largo de los siglos. Descubre el legado que ha perdurado y maravíllate con las huellas del pasado que aún perduran en nuestro presente. ¡Un recorrido que te transportará al corazón de nuestra historia!",
  },
  {
    title: "Festivales y Eventos",
    description:
      "Sumérgete en la efervescencia de nuestra ciudad gracias a una amplia gama de festivales y eventos que la animan a lo largo de todo el año. Desde celebraciones culturales que te transportarán a diferentes partes del mundo hasta emocionantes eventos deportivos y espectáculos en vivo que te dejarán sin aliento, siempre hay algo emocionante que hacer aquí. ¡Vive la magia de la ciudad mientras te unes a la diversión y la emoción que nuestros festivales y eventos ofrecen!",
  },
  {
    title: "Compras y Entretenimiento",
    description:
      "Déjate llevar por la emoción de las compras y el entretenimiento diurno mientras exploras una amplia variedad de tiendas y mercados. Desde elegantes boutiques que te ofrecen las últimas tendencias hasta coloridos mercados locales que despiertan tus sentidos, aquí encontrarás la combinación perfecta de adquisiciones y diversión. Ya sea que busques tesoros únicos o simplemente disfrutes de un día de compras relajado, nuestra ciudad tiene algo especial para ti. ¡Ven y descubre el placer de comprar y entretenerse en nuestro vibrante rincón del mundo!",
  },
  {
    title: "Arquitectura y Diseño",
    description:
      "Prepárate para maravillarte con la arquitectura única y el diseño urbano que nuestra ciudad tiene para ofrecer. Desde emblemáticos rascacielos que se alzan hacia el cielo hasta encantadoras calles adoquinadas que cuentan historias de tiempos pasados, aquí encontrarás una mezcla fascinante de estilos arquitectónicos y creatividad urbana. Camina por nuestras calles y descubre cómo el pasado y el presente se entrelazan en cada esquina, creando una experiencia visual que te dejará sin aliento. ¡Ven y admira la ciudad a través de su arquitectura y diseño únicos!",
  },
  {
    title: "Información Turística",
    description:
      "En tu búsqueda de una visita sin complicaciones, estamos aquí para proporcionarte valiosa información y consejos prácticos. Desde mapas detallados que te guiarán por la ciudad hasta recomendaciones de transporte que te facilitarán moverte, estamos comprometidos a hacer que tu experiencia sea lo más placentera posible. Nuestro objetivo es que disfrutes al máximo de cada momento en nuestra ciudad, y estamos disponibles para responder a tus preguntas y ayudarte en cada paso del camino. ¡Bienvenido y que tu viaje sea inolvidable!",
  },
];
const Inicio = () => {
  const navigate = useNavigate();

  const redirigirTerminos = () => {
    navigate("/Terminos");
  };

  return (
    <div className="inicio-container">
      <Header />

      <Carousel className="carousel">
        {lugaresData.map((lugar, index) => (
          <Carousel.Item key={index}>
            <div className="description-container">
              <div className="description">
                <h2>{lugar.title}</h2>
                <p>{lugar.description}</p>
              </div>
              <img className="image" src={lugar.image} alt={lugar.title} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <section className="categories-section">
        <div className="categories">
          <h2>Descubre la Ciudad: Arte, Gastronomía, Naturaleza y Más</h2>
          <p>
            Descubre una ciudad llena de vida y cultura, desde arte y
            gastronomía hasta naturaleza y vida nocturna...
          </p>
        </div>

        <div className="category-cards">
          {categoryData.map((category, index) => (
            <Card key={index} className="category-card">
              <Card.Body>
                <Card.Title>{category.title}</Card.Title>
                <Card.Text>{category.description}</Card.Text>
                <Button variant="primary" onClick={redirigirTerminos}>
                  Explorar
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Inicio;
