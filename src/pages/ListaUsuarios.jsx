import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/perfil.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import Constantes from "../../utils/Constantes";
import Swal from "sweetalert2";

const AbminListUser = () => {
  const token = localStorage.getItem("token");
  const [dataListarUser, setDataListarUser] = useState([]);
  const navigate = useNavigate();

  const listarUsuarios = () => {
    const endPoint = Constantes.URL_BASE + "/usuarios/listUser";

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
  const redirigirAbminUser = () => {
    navigate("/perfil");
  };
  useEffect(() => {
    listarUsuarios();
  }, []);
  
  return (
    <div className="contGeneral">
      <Header />
      <div>
        <h3 className="text-center mb-4">Tabla de Clientes</h3>

        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tipo de Usuario</th>
              <th scope="col">Nombres</th>
              <th scope="col">Email</th>
              <th scope="col">Usuario</th>
              <th scope="col">Foto</th>
              <th scope="col">Ver info</th>
            </tr>
          </thead>

          <tbody>
            {dataListarUser.map((user, index) => (
              <tr key={user._id}>
                <th scope="row">{index + 1}</th>
                <td>{user.TipoUsuario}</td>
                <td>{user.nombres}</td>
                <td>{user.email}</td>
                <td>{user.usuario}</td>
                <td>
                  <img
                    src={user.foto}
                    alt={user.nombres}
                    style={{ width: "50px", height: "40px" }}
                  />
                </td>
                <td onClick={redirigirAbminUser}>ver info   </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default AbminListUser;
