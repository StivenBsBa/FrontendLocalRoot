import React from "react";
import Logo from "../assets/compo/Logo.png"
import "../styles/Footer.css"
import { Link, useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';




const Footer = () => {
    const navigate = useNavigate();
    const redirigirInicio = () => {
        navigate("/Inicio");
    };
    const redirigirSobreNosotros = () => {
        navigate("/SobreNosotros");
    };
    const redirigirPreguntasFrecuentes = () => {
        navigate("/PreguntasFrecuentes");
    };
    const redirigirTerminos = () => {
        navigate("/Terminos");
    };
   
    return (
        <div className="cardFooter">

            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="LivingRoots">
                <h5>Locat roots</h5>
                <p>Conectando corazones con las riquezas culturales locales. Descubre, celebra y preserva nuestra herencia juntos. © 2023 Locat Root</p>
            </div>
            <div className="Pages">
                <h5>Pages</h5>
                <Nav.Link href="#Inicio" onClick={redirigirInicio}>Inicio</Nav.Link>
                <Nav.Link href="#SobreNosotros" onClick={redirigirSobreNosotros}>Sobre Nosotros</Nav.Link>
                <Nav.Link href="#PreguntasFrecuentes" onClick={redirigirPreguntasFrecuentes}>Preguntas Frecuentes</Nav.Link>
                <Nav.Link href="#TérminosCondiciones" onClick={redirigirTerminos}>Términos y Condiciones</Nav.Link>
                
            </div>
        </div>
    );
};

export default Footer;