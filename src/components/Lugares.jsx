import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/LugaresTuristicos.css"

const Lugares = ({ lugaresData }) => {
  const lugaresDataReverso = lugaresData.slice().reverse();

  return (
    <div className="lugares-container">
      {lugaresDataReverso.map((lugar) => (
        <div key={lugar._id} className="lugar">
          <img src={lugar.fotosLugar} alt="" />
          <h3>{lugar.nombreLugar}</h3>
          <p>{lugar.descripcionLugar}</p>
          <Link to={`/lugar/${lugar._id}`}>Ver Detalles</Link>
        </div>
      ))}
    </div>
  );
};

export default Lugares;
