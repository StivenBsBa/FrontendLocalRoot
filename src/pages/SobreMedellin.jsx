import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/SobreMedellin.css";

const SobreMedellin = () => {
  return (
    <div className="contGeneral">
      <Header />

      <div className="navCategoria">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-historia-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-historia"
              type="button"
              role="tab"
              aria-controls="pills-hitoria"
              aria-selected="true"
            >
              Historia
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-ubicacion-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-ubicacion"
              type="button"
              role="tab"
              aria-controls="pills-ubicacion"
              aria-selected="false"
            >
              Ubicación
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-clima-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-clima"
              type="button"
              role="tab"
              aria-controls="pills-clima"
              aria-selected="false"
            >
              Clima
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-poblacion-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-poblacion"
              type="button"
              role="tab"
              aria-controls="pills-poblacion"
              aria-selected="false"
            >
              Población
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-antioquia-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-antioquia"
              type="button"
              role="tab"
              aria-controls="pills-antioquia"
              aria-selected="false"
            >
              Antioquia
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-datos-interesantes-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-datos-interesantes"
              type="button"
              role="tab"
              aria-controls="pills-datos-interesantes"
              aria-selected="false"
            >
              Datos de Medellín
            </button>
          </li>
        </ul>
        <div className="contenido tab-content contenido" id="pills-tabContent">

          <div
            className="tab-pane fade show active"
            id="pills-historia"
            role="tabpanel"
            aria-labelledby="pills-historia-tab"
            tabIndex="0"
          >
            <h2>Historia de Medellín</h2>
            <p>
              Medellín, la segunda ciudad más grande de Colombia y la capital del departamento
              de Antioquia, tiene una historia arraigada que se remonta a la época
              precolombina cuando estaba habitada por la comunidad indígena Aburrá.
              Los Aburrá eran agricultores que vivían en armonía con la naturaleza en
              las fértiles tierras del Valle de Aburrá, el lugar que ahora ocupa la
              ciudad moderna de Medellín.
            </p>
            <p>
              Sin embargo, la historia de Medellín como una ciudad moderna comenzó en el
              siglo XVII con la llegada de los españoles a la región. Oficialmente fundada
              el 2 de noviembre de 1675 por el español Francisco Herrera y Campuzano,
              la ciudad recibió el nombre de "Villa de Nuestra Señora de la Candelaria
              de Medellín". Durante la época colonial, Medellín experimentó un crecimiento
              gradual y se convirtió en un importante centro de comercio y agricultura.
            </p>
            <p>
              A lo largo de los años, Medellín experimentó un crecimiento significativo
              debido a su ubicación estratégica y la abundancia de recursos naturales,
              especialmente el oro y la plata. Durante el siglo XIX, la ciudad se consolidó
              como un destacado centro industrial y comercial.
            </p>
            <p>
              Sin embargo, el siglo XX trajo consigo desafíos, incluyendo períodos de
              violencia y conflicto social, especialmente en la segunda mitad del siglo,
              con la aparición de grupos armados y el narcotráfico. Estos desafíos
              oscurecieron la imagen de Medellín en el escenario internacional.
            </p>
            <p>
              Pero a partir de la década de 1990, la ciudad emprendió un impresionante
              proceso de transformación y desarrollo urbano. La inversión en infraestructura,
              educación y programas de inclusión social contribuyó a mejorar la calidad de
              vida de sus habitantes y a cambiar la percepción de la ciudad en el ámbito
              nacional e internacional.
            </p>
            <p>
              Hoy en día, Medellín es conocida por su innovación, cultura, belleza natural
              y la hospitalidad de su gente. La ciudad ha superado muchos desafíos y se ha
              convertido en un destino turístico popular y un ejemplo de resiliencia y
              transformación urbana en América Latina. Su historia, rica en contrastes,
              es parte integral de su identidad y atractivo como destino turístico. Los
              visitantes pueden explorar su pasado y su presente vibrante mientras
              disfrutan de una experiencia única en esta fascinante ciudad colombiana.
            </p>
          </div>

          <div
            className="tab-pane fade"
            id="pills-ubicacion"
            role="tabpanel"
            aria-labelledby="pills-ubicacion-tab"
            tabIndex="0"
          >
            <h2>Ubicación de Medellín</h2>
            <p>Medellín es un atractivo destino turístico ubicado en la región noroccidental de Colombia, en el departamento de Antioquia. Esta ciudad se encuentra en el pintoresco Valle de Aburrá, rodeado de imponentes montañas pertenecientes a la Cordillera de los Andes, lo que le otorga un entorno natural excepcional.</p>

            <p>La altitud de Medellín, que se sitúa a aproximadamente 1,495 metros sobre el nivel del mar, le brinda un clima templado durante todo el año, lo que la ha hecho merecedora del apodo de "la ciudad de la eterna primavera". Este clima agradable hace que Medellín sea un lugar ideal para disfrutar de actividades al aire libre y explorar la belleza de la naturaleza circundante.</p>

            <p>Para los turistas, es importante conocer las ubicaciones cercanas a Medellín. Al norte, los municipios de Bello y Copacabana ofrecen opciones adicionales para explorar. Al sur, los municipios de Envigado y Sabaneta son ideales para quienes buscan experiencias auténticas. Hacia el este, los municipios de El Retiro, Guarne y Rionegro brindan la oportunidad de explorar la región montañosa y su riqueza natural. Al oeste, los municipios de La Estrella e Itagüí son lugares de interés cercanos.</p>

            <p>Medellín se destaca por su estratégica ubicación en el centro de Colombia, lo que facilita el acceso desde otras ciudades importantes del país. Su desarrollo económico y su rica oferta cultural la han convertido en un destino turístico en auge en Colombia. Los visitantes pueden disfrutar de una variedad de actividades, como explorar parques, museos, festivales y una emocionante escena gastronómica. La hospitalidad de su gente y su espíritu acogedor hacen que los turistas se sientan bienvenidos y disfruten de una experiencia única en esta vibrante ciudad.</p>

          </div>

          <div
            className="tab-pane fade"
            id="pills-clima"
            role="tabpanel"
            aria-labelledby="pills-clima-tab"
            tabIndex="0"
          >
            <h2>Clima en Medellín a lo largo del año</h2>
            <p>El clima en Medellín, conocida como la "Ciudad de la Eterna Primavera", es agradable durante todo el año debido a su ubicación a una altitud de aproximadamente 1,495 metros sobre el nivel del mar en el Valle de Aburrá. Medellín goza de un clima primaveral durante todo el año, lo que le ha valido el apodo de la "Ciudad de la Eterna Primavera." El clima es subtropical de montaña y se caracteriza por tener temperaturas agradables y una relativa humedad. Las temperaturas promedio oscilan entre 16°C y 26°C.</p>

            <div className="orden">
              <div>

                <h4>Temporada de Lluvias (Abril a Noviembre):</h4>
                <ul>
                  <li>Durante estos meses, Medellín experimenta una mayor cantidad de lluvias, especialmente entre abril y junio, y luego nuevamente en octubre y noviembre.</li>
                  <li>El clima es más fresco y húmedo en esta temporada, con temperaturas promedio que oscilan entre los 15°C y los 25°C.</li>
                  <li>Los paisajes verdes y exuberantes son un punto a favor de visitar Medellín durante la temporada de lluvias.</li>
                </ul>
              </div>

              <div>

                <h4>Temporada Seca (Diciembre a Marzo):</h4>
                <ul>
                  <li>Estos meses son la temporada seca en Medellín, y generalmente ofrecen días más soleados y menos precipitaciones.</li>
                  <li>Las temperaturas suelen ser más cálidas, con promedios de 20°C a 30°C.</li>
                  <li>La temporada seca es ideal para actividades al aire libre, como senderismo, exploración de parques naturales y visitas a lugares turísticos.</li>
                </ul>
              </div>
            </div>

            <div>

              <h4>Consejos para elegir la mejor época para visitar:</h4>
              <ul>
                <li>Si prefieres un clima más fresco y no te importa la posibilidad de lluvias, los meses de abril a junio y octubre a noviembre son buenos para disfrutar de la vegetación exuberante y los precios más bajos en alojamiento y turismo.</li>
                <li>Si buscas temperaturas más cálidas y un clima más soleado para actividades al aire libre, considera visitar Medellín entre diciembre y marzo. Estos son los meses ideales para disfrutar de la ciudad y sus alrededores sin preocuparte por la lluvia.</li>
                <li>Ten en cuenta que la temporada alta de turismo en Medellín suele ser durante la temporada seca, especialmente en diciembre y enero. Si prefieres evitar multitudes, considera planificar tu viaje para fechas fuera de estos meses.</li>
              </ul>
            </div>
            <p>Además, la ciudad cuenta con una amplia variedad de microclimas debido a su topografía montañosa, lo que la convierte en un lugar único para experimentar diferentes condiciones climáticas en cortas distancias.</p>
          </div>

          <div
            className="tab-pane fade"
            id="pills-poblacion"
            role="tabpanel"
            aria-labelledby="pills-poblacion-tab"
            tabIndex="0"
          >

            <h2>Información sobre la Población de Medellín</h2>
            <p>La población de Medellín es de aproximadamente 2,6 millones de habitantes, según las proyecciones del Departamento Administrativo Nacional de Estadística (DANE) para el año 2023. De esta cifra, el 52,9% son mujeres y el 47,1% son hombres.</p>

            <p>La población de Medellín está compuesta por personas de diferentes orígenes étnicos y culturales. La mayoría de la población es mestiza, pero también hay una importante población afrocolombiana e indígena.</p>

            <p>La población de Medellín está concentrada en el área urbana, que representa el 99,5% del total de la población de la ciudad. El área rural, por su parte, representa solo el 0,5% de la población.</p>

            <p>La población de Medellín está creciendo a un ritmo acelerado. Entre 2018 y 2023, la población de la ciudad creció en un 2,5%.</p>

            <p>La población de Medellín es un factor importante para el desarrollo de la ciudad. La ciudad es un importante centro económico, cultural y turístico, y su población es un activo valioso para el desarrollo de estos sectores.</p>

            <h4>Datos Adicionales sobre la Población de Medellín:</h4>
            <ul>
              <li>Edad: La edad promedio de la población de Medellín es de 30 años.</li>
              <li>Educación: El nivel de educación de la población de Medellín es relativamente alto. El 94,7% de la población mayor de 15 años ha completado la educación primaria y el 60,9% ha completado la educación secundaria.</li>
              <li>Ingresos: El ingreso promedio de la población de Medellín es de $1.500 dólares mensuales.</li>
              <li>Trabajo: La tasa de desempleo de Medellín es del 10,2%.</li>
            </ul>
          </div>

          <div
            className="tab-pane fade"
            id="pills-antioquia"
            role="tabpanel"
            aria-labelledby="pills-antioquia-tab"
            tabIndex="0"
          >
            <h2>Departamento de Antioquia</h2>
            <p>
              Medellín es la capital del departamento de Antioquia, uno de los
              32 departamentos de Colombia. Antioquia es conocida por su rica
              historia, cultura y belleza natural. El departamento cuenta con
              diversas regiones geográficas, desde montañas hasta playas en el
              Golfo de Urabá.
            </p>
            <p>
              Antioquia es famosa por ser el lugar de nacimiento de muchas
              figuras importantes en la historia de Colombia y por su
              contribución a la cultura del país. El departamento es conocido
              por sus tradiciones y festivales, como la Feria de las Flores en
              Medellín.
            </p>
            <p>
              La gastronomía de Antioquia es variada y deliciosa, con platos
              típicos como la bandeja paisa y la arepa antioqueña. La música y
              la danza también desempeñan un papel importante en la cultura
              antioqueña.
            </p>
            <p>
              Antioquia es un destino turístico popular debido a su belleza
              natural, que incluye parques nacionales, reservas naturales y
              paisajes montañosos impresionantes.
            </p>
          </div>

          <div
            className="tab-pane fade"
            id="pills-datos-interesantes"
            role="tabpanel"
            aria-labelledby="pills-datos-interesantes-tab"
            tabIndex="0"
          >
            <h2>Datos Interesantes sobre Medellín</h2>
            <ul>
              <li>Medellín es conocida como la "Ciudad de la Eterna Primavera" por su clima agradable durante todo el año.</li>
              <li>La ciudad ha experimentado una notable transformación urbana en las últimas décadas y es considerada un ejemplo de innovación y desarrollo en América Latina.</li>
              <li>Medellín es famosa por su arquitectura moderna, parques innovadores y una vibrante vida cultural.</li>
              <li>La Feria de las Flores es uno de los eventos más importantes de la ciudad y celebra la cultura y la tradición antioqueña.</li>
              <li>Medellín es sede de importantes instituciones educativas y universidades, contribuyendo al desarrollo académico y tecnológico de la región.</li>
              <li>La gastronomía de Medellín es variada y deliciosa, con platos típicos como la bandeja paisa y la arepa.</li>
              <li>La ciudad ha ganado reconocimiento internacional por su enfoque en la sostenibilidad y la innovación social.</li>
            </ul>

            <h4> Datos generales</h4>
            <ul>
              <li>Población: 2,6 millones de habitantes (2023)</li>
              <li>Superficie: 163,6 km²</li>
              <li>Altitud: 1.495 metros sobre el nivel del mar</li>
              <li>Clima: Templado durante todo el año, con una temperatura promedio de 24 grados Celsius</li>
            </ul>

            <h4> Datos curiosos</h4>
            <ul>
              <li>La ciudad es conocida como la "Ciudad de la Eterna Primavera" debido a su clima templado.</li>
              <li>Medellín es el hogar de la escultura más grande del mundo hecha por un solo artista: El Espectador, una escultura de 40 metros de altura del artista colombiano Fernando Botero.</li>
              <li>La ciudad es también el hogar del Metrocable, un sistema de transporte público aéreo que ofrece vistas panorámicas de la ciudad.</li>
              <li>Medellín ha sido reconocida por su progreso en materia de seguridad y desarrollo económico en los últimos años.</li>
            </ul>

            <h4> Datos adicionales</h4>
            <ul>
              <li>Historia: Medellín fue fundada en 1675 por los españoles.</li>
              <li>Cultura: Medellín es un importante centro cultural, con una variedad de museos, galerías de arte, teatros y festivales.</li>
              <li>Gastronomía: Medellín tiene una rica gastronomía que combina sabores tradicionales colombianos con influencias internacionales.</li>
              <li>Turismo: Medellín es un destino turístico emergente, con una variedad de atracciones para ofrecer a los visitantes.</li>
            </ul>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SobreMedellin;
