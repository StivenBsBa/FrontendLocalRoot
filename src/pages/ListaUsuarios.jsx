import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/perfil.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import Constantes from "../../utils/Constantes";
import Swal from "sweetalert2";
import TablaUser from "../components/TablaUser"; 


const AbminListUser = () => {
  const token = localStorage.getItem("token");
  const [DataListarUser, setDataListarUser] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [noResultados, setNoResultados] = useState(false);
  const [UserFiltrados, setUserFiltrados] = useState([]);


  const listarUsuarios = () => {
    const endPoint = Constantes.URL_BASE + '/usuarios/listUser';

    axios
      .get(endPoint, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((resp) => {
        setDataListarUser(resp.data.result);
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
    listarUsuarios();
  }, []);

  const manejarBusqueda = (e) => {
    const terminoBusqueda = e.target.value.toLowerCase();
    setSearch(terminoBusqueda);

    // Filtrar los lugares que coincidan con el término de búsqueda
    const UsersFiltrados = DataListarUser.filter((User) =>
      User.nombres.toLowerCase().includes(terminoBusqueda)
    );

    setUserFiltrados(UsersFiltrados);

    // Verificar si no hay resultados
    if (UsersFiltrados.length === 0) {
      setNoResultados(true);
    } else {
      setNoResultados(false);
    }
  };

  return (
    <div className="contGeneral">
      <Header />
      <div>
        <h3 className="text-center mb-4">Tabla de Clientes</h3>

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
                  placeholder="Buscar por nombre de lugar" // Corregido el placeholder
                  aria-label="Search"
                  value={search}
                  onChange={manejarBusqueda}
                />
                <button className="btn btn-outline-success" type="submit">
                  Buscar
                </button>
              </form>

            </div>
          </div>
        </nav>
        {noResultados ? (
          <p className="no-resultados-mensaje">
            No hay Usaurio que coincidan con la búsqueda.
          </p>
        ) : (
          <TablaUser UserData={search.length ? UserFiltrados : DataListarUser  } />
         
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AbminListUser;
