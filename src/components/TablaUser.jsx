import React from "react";
import { Link } from "react-router-dom";

const Usuarios = ({ UserData }) => {
  const UserDataReverso = UserData.slice().reverse();

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
