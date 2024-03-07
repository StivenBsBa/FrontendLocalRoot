import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../styles/Login.css";
import FormLogin from "./FormLogin";
import FormRegistre from "./FormRegistre";
import "../styles/Login.css";


function Login() {
  const navigate = useNavigate();

  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  return (
    <div className="container mt-2">
      <div className="tab-content">
        {/* Pedir datos para iniciar sesión */}
        <div className={`tab-pane ${justifyActive === "tab1" ? "active" : ""}`}>
          <div className="d-flex tamaño">
            <FormLogin />
            <div className="descripcion">
              <h2>Bienvenido a Local Root</h2>
              <p>
                En Local Root, estamos dedicados a celebrar y preservar la
                riqueza de la cultura local en Medellín. Descubre eventos
                emocionantes, apoya a los talentosos artistas locales y
                sumérgete en las tradiciones únicas que hacen que nuestra
                comunidad sea especial.
              </p>
              <a
                className={`nav-link ${
                  justifyActive === "tab2" ? "active" : ""
                }`}
                onClick={() => handleJustifyClick("tab2")}
              >
                <Button variant="primary">Registrarse</Button>
              </a>
            </div>
          </div>
        </div>

        {/* Pedir los datos del registro */}
        <div className={`tab-pane ${justifyActive === "tab2" ? "active" : ""}`}>
          <div className="d-flex tamaño">
            <div className="descripcion">
              <h2>Bienvenido a Local Root</h2>
              <p>reciona en este lugar para ir a inicar sesion</p>
              <a
                className={`nav-link ${
                  justifyActive === "tab1" ? "active" : ""
                }`}
                onClick={() => handleJustifyClick("tab1")}
              >
                <Button variant="primary">Iniciar Sesión</Button>
              </a>
            </div>
            <FormRegistre />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
