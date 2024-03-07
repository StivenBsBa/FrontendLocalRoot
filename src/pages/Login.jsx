import React, { useEffect, useState } from "react";
import FormLoginRegistre from "../components/FormLoginRegistre";
import "../styles/Login.css";
import Logo from "../assets/compo/Logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const redirigirInicio = () => {
    navigate("/Inicio");
  };
  return (
    <div className="card_main">
      <div className="emcabezadoAzul">
        <h2>
          Descubre la riqueza <img src={Logo} alt="" className="ImagenLogo" />{" "}
          de nuestra cultura
        </h2>
      </div>
      <button className="button type1" onClick={redirigirInicio} >
          <span className="btn-txt">ir al inicio</span>
        </button>
      <FormLoginRegistre />
    </div>
  );
};

export default Login;
