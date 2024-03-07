import React from "react";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Constantes from "../../utils/Constantes";
import "../styles/InfoEvento.css";
import Swal from "sweetalert2";
import CrearEditarLugares from "../components/CrearEditarLugares";

const InfoLugares = () => {
  const { id } = useParams();

  const token = localStorage.getItem("token");
  const [DataLugar, setDataLugar] = useState({});
  const Usuario = localStorage.getItem("username");

  const handleOneLugar = async () => {
    const endPoint = `${Constantes.URL_BASE}/lugares/findbyidlugares/${id}`;

    await axios
      .get(endPoint, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        setDataLugar(resp.data.result);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400) {
          Swal.fire("Información!", err.response.data.message, "error");
        } else if (err.response.status === 401) {
          Swal.fire("Información!", err.response.data.message, "error");
        } else {
          Swal.fire("Información!", "Ocurrió un error!", "error");
        }
      });
  };

  useEffect(() => {
    handleOneLugar();
  }, []);

  const handleDelete = () => {
    Swal.fire({
      title: `¿Está seguro de Eliminar este lugar <strong>${DataLugar.nombreLugar}</strong>? Esta acción es irreversible!`,
      showCancelButton: true,
      confirmButtonText: "Si",
    }).then(async (result) => {
      if (result.isConfirmed) {
        //Accion en caso de que elijan el SI
        const endPoint = `${Constantes.URL_BASE}/lugares/deletelugares/${DataLugar._id}`;
        await axios
          .delete(endPoint, {
            headers: { Authorization: `bearer ${token}` },
          })
          .then((resp) => {
            Swal.fire("Información!", resp.data.message, "success");
            handleOneLugar();
            window.history.back();
          })
          .catch((err) => {
            console.log(err);
            if (err.response.status === 400) {
              Swal.fire("Información!", err.response.data.message, "error");
            } else if (err.response.status === 401) {
              Swal.fire("Información!", err.response.data.message, "error");
            } else {
              Swal.fire("Información!", "Ocurrió un error!", "error");
            }
          });
      }
    });
  };

  const handleLikelugares = async (e) => {
    const datosLugar = {
      Usuario: Usuario,
      idLugares: id,
    };

    const endPoint = `${Constantes.URL_BASE}/lugares/createLugareLike`;

    axios
      .post(endPoint, datosLugar)
      .then((resp) => {
        console.log(resp);
        Swal.fire("Información", "Lugar guardado en favorito", "success");
      })
      .catch((error) => {
        console.error(error);
        if (
          error.response &&
          (error.response.status === 400 || error.response.status === 404)
        ) {
          Swal.fire("Error", error.response.data.message, "error");
        } else {
          Swal.fire("Error", "Ocurrió un error", "error");
        }
      });
  };

  const handleDeleteLike = () => {
    Swal.fire({
      title: `¿Está seguro de Eliminar este lugar <strong>${DataLugar.nombreLugar}</strong> de favoritos? Esta acción es irreversible!`,
      showCancelButton: true,
      confirmButtonText: "Si",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Acción en caso de que elijan el SI
        const endPoint = `${Constantes.URL_BASE}/lugares/deleteLugarLike`;
        const datosLugar = {
          Usuario: Usuario,
          idLugares: DataLugar._id,
        };

        axios
          .delete(endPoint, {
            data: datosLugar,
            headers: { Authorization: `bearer ${token}` },
          })
          .then((resp) => {
            Swal.fire("Información!", resp.data.message, "success");
            handleOneLugar();
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
            if (err.response.status === 400) {
              Swal.fire("Información!", err.response.data.message, "error");
            } else if (err.response.status === 401) {
              Swal.fire("Información!", err.response.data.message, "error");
            } else {
              Swal.fire("Información!", "Ocurrió un error!", "error");
            }
          });
      }
    });
  };
  return (
    <div className="contGeneral">
      <Header />

      <div className="Contenedor">
        {Usuario != null && (
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Opciones
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {DataLugar.usuario === Usuario && (
                <>
                  <Dropdown.Item href="#/action-1">
                    <CrearEditarLugares />
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    onClick={() => handleDelete(DataLugar)}
                  >
                    Eliminar Lugar
                  </Dropdown.Item>
                </>
              )}

              <Dropdown.Item href="#/action-3" onClick={handleLikelugares}>
                Guardar Lugar en favoritos
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4" onClick={handleDeleteLike}>
                Eliminar Lugar de favoritos
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}

        <h1>Encuentra grandes lugares y disfrútalos</h1>
        <h2 className="nombre">{DataLugar.nombreLugar}</h2>
        <div className="infoGeneral">
          <img src={DataLugar.fotosLugar} alt="" />
          <div className="informacion">
            <div className="horario">
              <div>
                <b>Horario:</b>
                {DataLugar.horarioLugar &&
                  DataLugar.horarioLugar
                    .split("\n")
                    .map((parrafo, index) => <p key={index}>{parrafo}</p>)}
              </div>
              <div>
                <b>Ubicación:</b>
                {DataLugar.direccionLugar &&
                  DataLugar.direccionLugar
                    .split("\n")
                    .map((parrafo, index) => <p key={index}>{parrafo}</p>)}
              </div>
            </div>
            <div className="datos">
              <div>
                <b>Contacto:</b>
                {DataLugar.contactoLugar &&
                  DataLugar.contactoLugar
                    .split("\n")
                    .map((parrafo, index) => <p key={index}>{parrafo}</p>)}
              </div>

              <div>
                <p>
                  <b>Categoría:</b>
                </p>
                <ul>
                  {DataLugar.categoriaLugar?.map((categoria, index) => (
                    <li key={index}>{categoria}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="descrip">
          <b>Informacion del lugar:</b>
          {DataLugar.descripcionLugar &&
            DataLugar.descripcionLugar
              .split("\n")
              .map((parrafo, index) => <p key={index}>{parrafo}</p>)}
        </div>

        <div className="descrip">
          <b>Atracciones del lugar:</b>
          {DataLugar.atraccionesLugar &&
            DataLugar.atraccionesLugar
              .split("\n")
              .map((parrafo, index) => <p key={index}>{parrafo}</p>)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InfoLugares;
