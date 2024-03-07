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
import CrearEditarEvento from "../components/CrearEditarEvento";

const InfoEvento = () => {
  const { id } = useParams();

  const token = localStorage.getItem("token");
  const [DataEvento, setDataEvento] = useState([]);
  const usuario = localStorage.getItem("username");

  const handleOneEvento = async () => {
    const endPoin = `${Constantes.URL_BASE}/eventos/findbyidEvento/${id}`;

    await axios
      .get(endPoin, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        setDataEvento(resp.data.result);
        console.log(DataEvento);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 400) {
          Swal.fire("Información!", err.response.data.message, "error");
        } else if (err.response.status == 401) {
          Swal.fire("Información!", err.response.data.message, "error");
        } else {
          Swal.fire("Información!", "Ocurrio un error!", "error");
        }
      });
  };

  useEffect(() => {
    handleOneEvento();
  }, []);

  const handleDelete = () => {
    Swal.fire({
      title: `¿Está seguro de Eliminar este Evento <strong>${DataEvento.nombre}</strong>? Esta acción es irreversible!`,
      showCancelButton: true,
      confirmButtonText: "Si",
    }).then(async (result) => {
      if (result.isConfirmed) {
        //Accion en caso de que elijan el SI
        const endPoint = `${Constantes.URL_BASE}/eventos/deleteEvento/${DataEvento._id}`;
        await axios
          .delete(endPoint, {
            headers: { Authorization: `bearer ${token}` },
          })
          .then((resp) => {
            Swal.fire("Información!", resp.data.message, "success");
            handleOneEvento();
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

  const handleLikeEventos = async (e) => {
    const datosEventos = {
      Usuario: usuario,
      idEventos: id,
    };

    const endPoint = `${Constantes.URL_BASE}/eventos/createEventoLike`;

    axios
      .post(endPoint, datosEventos)
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
      title: `¿Está seguro de Eliminar el evento <strong>${DataEvento.nombre}</strong> de favoritos? Esta acción es irreversible!`,
      showCancelButton: true,
      confirmButtonText: "Si",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Acción en caso de que elijan el SI
        const endPoint = `${Constantes.URL_BASE}/eventos/deleteEventosLike`;
        const datosEvento = {
          Usuario: usuario,
          idEventos: DataEvento._id,
        };

        axios
          .delete(endPoint, {
            data: datosEvento,
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
        {usuario != null && (
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Opciones
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {DataEvento.usuario === usuario && (
                <>
                  <Dropdown.Item href="#/action-1">
                    <CrearEditarEvento />
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    onClick={() => handleDelete(DataEvento)}
                  >
                    Eliminar Evento
                  </Dropdown.Item>
                </>
              )}

              <Dropdown.Item href="#/action-3" onClick={handleLikeEventos}>
                Guardar Evento en favoritos
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4" onClick={handleDeleteLike}>
                Eliminar Evento de favoritos
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
        <h2 className="nombre">{DataEvento.nombre}</h2>
        <div className="infoGeneral">
          <img src={DataEvento.imageEvento} alt="" />

          <div className="informacion">
            <div className="horario">
              <p>
                <b>Fecha Inicio:</b> <br />
                {DataEvento.fechaInicioEvento}
              </p>
              <p>
                <b>Hora Inicio:</b> <br />
                {DataEvento.horaInicioEvento}
              </p>
              <p>
                <b>Fecha fin:</b> <br />
                {DataEvento.fechaFinEvento}{" "}
              </p>
              <p>
                <b>Hora fin:</b> <br />
                {DataEvento.horaFinEvento}{" "}
              </p>
              <p>
                <b>Contacto:</b>
                <br /> {DataEvento.contacto}
              </p>
              <p>
                <b>Organizador:</b>
                <br /> {DataEvento.organizador}
              </p>
            </div>
            <div className="datos">
              <p>
                <b>ubicacion:</b> <br /> {DataEvento.ubicacion}
              </p>
              <div>
                <p>
                  <b>Categoría:</b>
                </p>
                <ul>
                  {DataEvento.categoria?.map((categoria, index) => (
                    <li key={index}>{categoria}</li>
                  ))}
                </ul>
              </div>

              <p>
                <b>costo Entrada: </b> <br />
                {DataEvento.costoEntrada}
              </p>
            </div>
          </div>
        </div>
        <div className="descrip">
          {DataEvento.descripcion &&
            DataEvento.descripcion
              .split("\n")
              .map((parrafo, index) => <p key={index}>{parrafo}</p>)}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InfoEvento;
