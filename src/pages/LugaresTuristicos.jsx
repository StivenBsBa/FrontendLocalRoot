import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Lugares from "../components/Lugares"; 
import Constantes from "../../utils/Constantes";
import axios from "axios";
import Swal from 'sweetalert2';

const LugaresTuristicos = () => {
  const token = localStorage.getItem("token");
  const [DataLugares, setDataLugares] = useState([]);
  const [search, setSearch] = useState('');
  const [lugaresFiltrados, setLugaresFiltrados] = useState([]);
  const [noResultados, setNoResultados] = useState(false);

  const obtenerLugares = () => {
    const endPoint = Constantes.URL_BASE + '/lugares/listlugares';

    axios
      .get(endPoint, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((resp) => {
        setDataLugares(resp.data.result);
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.status === 400) {
          Swal.fire("Información!", err.response.data.message, "error");
        } else if (err.response && err.response.status === 401) {
          Swal.fire("Información!", err.response.data.message, "error");
        } else {
          Swal.fire("Información!", "Ocurrió un error!", "error");
        }
      });
  };


  useEffect(() => {
    obtenerLugares();
  }, []);

  const manejarBusqueda = (e) => {
    const terminoBusqueda = e.target.value.toLowerCase();
    setSearch(terminoBusqueda);

    // Filtrar los lugares que coincidan con el término de búsqueda
    const lugaresFiltrados = DataLugares.filter((lugar) =>
      lugar.nombreLugar.toLowerCase().includes(terminoBusqueda)
    );

    setLugaresFiltrados(lugaresFiltrados);

    // Verificar si no hay resultados
    if (lugaresFiltrados.length === 0) {
      setNoResultados(true);
    } else {
      setNoResultados(false);
    }
  };

  return (
    <div className="contGeneral">
      <Header />
      <div className="Contenedor">
        <div className="descubre">
          <h2>Descubre lo que Medellín tiene para ofrecer: ¡Ven y disfruta!</h2>
          <p>
            Medellín es un destino lleno de maravillas que te esperan. Desde
            sus fascinantes museos hasta sus vibrantes plazas, esta ciudad tiene
            algo para todos los gustos. Sumérgete en su cultura, explora su
            historia y déjate sorprender por su belleza natural. ¡Medellín te
            invita a venir y disfrutar de experiencias inolvidables en cada
            rincón!
          </p>
        </div>

        <nav className="navbar navbar-expand-lg bg-body-terciary">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscar por nombre de lugar"  // Corregido el placeholder
                  aria-label="Search"
                  value={search}
                  onChange={manejarBusqueda}
                />
                <button className="btn btn-outline-success" type="submit">
                  Buscar
                </button>
              </form>
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Lista
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Mes</a></li>
                    <li><a className="dropdown-item" href="#">Día</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {noResultados ? (
          <p className="no-resultados-mensaje">No hay lugares que coincidan con la búsqueda.</p>
        ) : (
          <Lugares lugaresData={search.length ? lugaresFiltrados : DataLugares} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default LugaresTuristicos;
