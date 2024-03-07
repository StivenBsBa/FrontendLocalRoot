import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VerEventos from "../components/verEvento";
import Constantes from "../../utils/Constantes";
import "../styles/Eventos.css";

const Eventos = () => {
  const token = localStorage.getItem("token");
  const [DataEvento, setDataEvento] = useState([]);
  const [search, setSearch] = useState("");
  const [eventosFiltrados, setEventosFiltrados] = useState([]);
  const [noResultados, setNoResultados] = useState(false);

  const obtenerEventos = async () => {
    const endPoint = Constantes.URL_BASE + "/eventos/listEvento";

    await axios
      .get(endPoint, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        setDataEvento(resp.data.result);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400) {
          Swal.fire("Información!", err.response.data.message, "error");
        } else if (err.response.status === 401) {
          Swal.fire("Información!", err.response.data.message, "error");
        } else {
          Swal.fire("Información!", "Ocurrió un error!", "error");
        }
      });
  };

  useEffect(() => {
    obtenerEventos();
  }, []);

  const manejarBusqueda = (e) => {
    const terminoBusqueda = e.target.value.toLowerCase();
    setSearch(terminoBusqueda);

    // Filtrar los eventos que coincidan con el término de búsqueda
    const eventosFiltrados = DataEvento.filter((evento) =>
      evento.nombre.toLowerCase().includes(terminoBusqueda)
    );

    setEventosFiltrados(eventosFiltrados);

    // Verificar si no hay resultados
    if (eventosFiltrados.length === 0) {
      setNoResultados(true);
    } else {
      setNoResultados(false);
    }
  };

  return (
    <div className="contGeneral">
      <Header />

      <div className="Contenedor">
        <div className="hacer">
          <h2 className="elementor-heading-title elementor-size-default">
            ¿QUÉ HACER HOY?
          </h2>
          <p>
            Encuentra actividades entretenidas para hacer en Medellín, como
            eventos locales y festivales, actuaciones y exposiciones de arte.
            Aquí te mostramos qué hacer para que puedas planificar tu visita por
            la ciudad y que la vivas de la mejor manera.&nbsp;
          </p>
        </div>

        <nav className="navbar navbar-expand-lg bg-body-terciary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscar por nombre de evento"
                  aria-label="Search"
                  value={search}
                  onChange={manejarBusqueda}
                />
                <button className="btn btn-outline-success" type="submit">
                  Buscar
                </button>
              </form>
              <ul
                className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                style={{ "--bs-scroll-height": "100px" }}
              >
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Lista
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Mes
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Día
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {noResultados ? (
          <p className="no-resultados-mensaje">
            No hay eventos que coincidan con la búsqueda.
          </p>
        ) : (
          <VerEventos eventos={search.length ? eventosFiltrados : DataEvento} />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Eventos;
