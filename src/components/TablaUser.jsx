import React, { useState } from "react";
import { Link } from "react-router-dom";
import Constantes from "../../utils/Constantes";
import axios from "axios";
import Swal from "sweetalert2";

const Usuarios = ({ UserData }) => {
  const UserDataReverso = UserData.slice().reverse();
  const [tipoUsuario, setTipoUsuario] = useState("");

  const handleEditTipoUser = (usuario, nuevoTipoUsuario) => {
    const endPoint = `${Constantes.URL_BASE}/usuarios/updateTipoUser/${usuario}`;
    const data = {
      usuario: usuario,
      TipoUsuario: nuevoTipoUsuario
    };
    axios
      .put(endPoint, data)
      .then((resp) => {
        Swal.fire({
          title: `¿Desea cambiar el tipo de usuario a "${nuevoTipoUsuario}"?`,
          showDenyButton: true,
          confirmButtonText: "Cambiar",
          denyButtonText: `No Cambiar`
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("¡Guardado!", "", "success");
          } else if (result.isDenied) {
            Swal.fire("Los cambios no se guardaron", "", "info");
          }
          window.location.reload();
        });

      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 400 || error.response.status === 404) {
          Swal.fire("¡Información!", error.response.data.message, "error");
        } else {
          Swal.fire("¡Información!", "Ocurrió un error", "error");
        }
      });
  };

  const handleChangeTipoUsuario = (usuario, nuevoTipoUsuario) => {
    setTipoUsuario(nuevoTipoUsuario);
    handleEditTipoUser(usuario, nuevoTipoUsuario);
  };

  return (
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
        {UserDataReverso.map((user, index) => (
          <tr key={user._id}>
            <th scope="row">{index + 1}</th>
            <td>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {user.TipoUsuario}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() =>
                        handleChangeTipoUsuario(user.usuario, "Cliente")
                      }
                    >
                      Cliente
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() =>
                        handleChangeTipoUsuario(
                          user.usuario,
                          "SuperAdministrador"
                        )
                      }
                    >
                      SuperAdministrador
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() =>
                        handleChangeTipoUsuario(user.usuario, "Administrador")
                      }
                    >
                      Administrador
                    </button>
                  </li>
                </ul>
              </div>
            </td>
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
            <td>
              <Link to={`/Perfil/${user.usuario}`}>Ver Detalles</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Usuarios;
