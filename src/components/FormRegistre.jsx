import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Constantes from "../../utils/Constantes";
import RestablecerPassword from "./RestablecerPassword";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const [TipoUsuario, setTipoUsuario] = useState("");
  const [nombres, setNombres] = useState("");
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [foto, setfoto] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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

  // Consumo del registro
  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      Swal.fire(
        "Información",
        "La contraseña y la confirmación de contraseña no coinciden",
        "error"
      );
      return;
    }

    const endPoint = Constantes.URL_BASE + "/usuarios/createUser";

    const data = {
      TipoUsuario: TipoUsuario,
      nombres: nombres,
      usuario: usuario,
      email: email,
      password: password,
      foto: "https://svgsilh.com/svg_v2/1299805.svg",
    };

    await axios
      .post(endPoint, data)
      .then((resp) => {
        console.log(resp);
        Swal.fire(
          "Información",
          "Usuario " + usuario + " creado, inicia sesión"
        );
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status == 400 || error.response.status === 404) {
          Swal.fire("Información", error.response.data.message, "error");
        } else {
          Swal.fire("Información", "Ocurrió un error", "error");
        }
      });
  };

 

  return (
    <div className="container tamañoform">
      <h3>Registrarse en esta plataforma</h3>
      <input
        className="form-control mb-2"
        placeholder="Nombre Completo"
        type="text"
        onChange={(e) => setNombres(e.target.value)}
      />
      <input
        className="form-control mb-2"
        placeholder="Usuario"
        type="text"
        onChange={(e) => setUsuario(e.target.value)}
      />
      <input
        className="form-control mb-2"
        placeholder="Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="d-flex">
        <input
          className="form-control me-2"
          placeholder="Contraseña"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          className="form-control"
          placeholder="Confirmar Contraseña"
          type={showPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

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

    
      <div className="form-check d-flex justify-content-center mb-2">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          He leído y acepto los términos.
        </label>
      </div>
      <div className="d-flex justify-content-center">
        <button className="button type1" onClick={handleRegister}>
          <span className="btn-txt">Registrarse</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
