import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Constantes from "../../utils/Constantes";
import RestablecerPassword from "./RestablecerPassword";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  // consumo del login
  const inicioSesion = async (e) => {
    e.preventDefault();
    const endPoin = Constantes.URL_BASE + "/usuarios/loginUser";
    const data = {
      usuario: usuario,
      password: password,
    };
    console.log("usuario:", usuario);
    console.log("Password:", password);
    await axios
      .post(endPoin, data)
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("token", resp.data.jwt);
        localStorage.setItem("user", resp.data.user);
        localStorage.setItem("username", usuario);
        navigate("/Inicio");
        Swal.fire(
          "Informacion!",
          localStorage.getItem("usuario") + " Bienvenido"
        );
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status == 400 || error.response.status === 404) {
          Swal.fire("Informacion!", error.response.data.message, "error");
        } else {
          Swal.fire("Informacion!", "Ocurrio un error", "error");
        }
      });
  };

  return (
    <div className="container tamañoform">
      <h3>Inicia Sesion</h3>
      <input
        className="form-control mb-2"
        placeholder="Ingresar tu Usuario"
        type="email"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <input
        className="form-control mb-2"
        placeholder="Contraseña"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="d-flex justify-content-between mx-4 mb-4">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onClick={toggleShowPassword}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Mostrar Contraseña
          </label>
        </div>
        <RestablecerPassword />
      </div>
      <div className="d-flex justify-content-center">
        <button className="button type1" onClick={inicioSesion}>
          <span className="btn-txt">Iniciar Sesión</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
