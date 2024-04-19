import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import axios from "axios";
import Constantes from "../../utils/Constantes";
import "../styles/CrearEvento.css";

function CrearEditarLugares() {
  const { id } = useParams();
  const [showPlaceModal, setShowPlaceModal] = useState(false);

  const usuario = localStorage.getItem("username");

  const [nombreLugar, setNombreLugar] = useState("");
  const [direccionLugar, setDireccionLugar] = useState("");
  const [horarioLugar, setHorarioLugar] = useState("");
  const [descripcionLugar, setDescripcionLugar] = useState("");
  const [atraccionesLugar, setAtraccionesLugar] = useState("");
  const [fotosLugar, setFotosLugar] = useState("");
  const [contactoLugar, setContactoLugar] = useState("");
  const [categoriaLugar, setCategoriaLugar] = useState([]);

  useEffect(() => {
    if (id) {
      handleOneLugar();
    }

  }, [id]);


  const handleOneLugar = () => {
    const endPoint = `${Constantes.URL_BASE}/lugares/findbyidlugares/${id}`;

    axios
      .get(endPoint)
      .then((resp) => {
        const lugarData = resp.data.result;
        setNombreLugar(lugarData.nombreLugar);
        setDireccionLugar(lugarData.direccionLugar);
        setHorarioLugar(lugarData.horarioLugar);
        setDescripcionLugar(lugarData.descripcionLugar);
        setAtraccionesLugar(lugarData.atraccionesLugar);
        setFotosLugar(lugarData.fotosLugar);
        setContactoLugar(lugarData.contactoLugar);
        setCategoriaLugar(lugarData.categoriaLugar);
      })
      .catch((err) => {
        console.error(err);
        if (err.response && (err.response.status === 400 || err.response.status === 401)) {
          Swal.fire("Información!", err.response.data.message, "error");
        } else {
          Swal.fire("Información!", "Ocurrió un error!", "error");
        }
      });
  };

  const mostrarModalLugar = () => {
    setShowPlaceModal(true);
  };

  const cerrarModalLugar = () => {
    setShowPlaceModal(false);
  };

  const handleCategoriaCheckbox = (isChecked, category) => {
    if (isChecked) {
      // Agregar la categoría a la lista
      setCategoriaLugar([...categoriaLugar, category]);
    } else {
      // Quitar la categoría de la lista
      setCategoriaLugar(categoriaLugar.filter((c) => c !== category));
    }
  };

  const guardarLugar = async (e) => {
    if (
      nombreLugar.trim() === "" ||
      categoriaLugar.length === 0 ||
      direccionLugar.trim() === "" ||
      horarioLugar.trim() === "" ||
      descripcionLugar.trim() === "" ||
      atraccionesLugar.trim() === "" ||
      contactoLugar.trim() === "" ||
      fotosLugar.trim() === ""
    ) {
      Swal.fire("Error", "Por favor, completa todos los campos del lugar.", "error");
    } else {
      e.preventDefault();

      const datosLugar = {
        usuario: usuario,
        nombreLugar: nombreLugar,
        categoriaLugar: categoriaLugar,
        direccionLugar: direccionLugar,
        horarioLugar: horarioLugar,
        descripcionLugar: descripcionLugar,
        atraccionesLugar: atraccionesLugar,
        contactoLugar: contactoLugar,
        fotosLugar: fotosLugar,
      };

      if (id) {
        // Si hay un ID, estamos editando un lugar existente
        datosLugar.id = id;
        const endPoint = `${Constantes.URL_BASE}/lugares/updateLugares/${id}`;

        axios
          .put(endPoint, datosLugar)
          .then((resp) => {
            cerrarModalLugar();
            Swal.fire("Información", "Lugar actualizado", "success");
            window.location.reload();

          })
          .catch((error) => {
            console.error(error);
            if (error.response && (error.response.status === 400 || error.response.status === 404)) {
              Swal.fire("Error", error.response.data.message, "error");
            } else {
              Swal.fire("Error", "Ocurrió un error", "error");
            }
          });
      } else {
        // Si no hay un ID, estamos creando un nuevo lugar
        const endPoint = `${Constantes.URL_BASE}/lugares/createLugares`;

        axios
          .post(endPoint, datosLugar)
          .then((resp) => {
            cerrarModalLugar();
            Swal.fire("Información", "Lugar creado", "success");
            window.location.reload();

          })
          .catch((error) => {
            console.error(error);
            if (error.response && (error.response.status === 400 || error.response.status === 404)) {
              Swal.fire("Error", error.response.data.message, "error");
            } else {
              Swal.fire("Error", "Ocurrió un error", "error");
            }
          });
      }
    }
  };

  function autoExpand(e) {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }
  const categoriasDiferentes = [
    "Museos",
    "Barrios Urbano o pueblos",
    "Teatros",
    "Bibliotecas",
    "Lugares históricos",
    "Centros culturales",
    "conciertos",
    "Espacios de exposiciones",
    "Parques",
    "Monumentos históricos",
    "Atracción turística",
    "Jardines"
  ];

  return (
    <div>
      <Button className="crear-evento-button" variant="outline-primary" onClick={mostrarModalLugar}>
        {id ? "Editar lugar" : "Crear lugar"}
      </Button>{" "}

      <Modal className="custom-modal" show={showPlaceModal} onHide={cerrarModalLugar} centered>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">{id ? "Editar Lugar" : "Crear Lugar"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Nombre del lugar</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Nombre del lugar"
              value={nombreLugar}
              onChange={(e) => setNombreLugar(e.target.value)}
              onInput={autoExpand}
            />
          </Form.Group>


          <Form.Group className="mb-3">
            <Form.Label>Categoría del Lugar</Form.Label>
            <div className="row">
              {categoriasDiferentes.map((categoria, index) => (
                <div className="col-4" key={index}>
                  <Form.Check
                    type="checkbox"
                    id={`categoria${index + 1}`}
                    label={categoria}
                    checked={categoriaLugar.includes(categoria)}
                    onChange={(e) => handleCategoriaCheckbox(e.target.checked, categoria)}
                  />
                </div>
              ))}
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Dirección del lugar</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Dirección del lugar"
              value={direccionLugar}
              onChange={(e) => setDireccionLugar(e.target.value)}
              onInput={autoExpand}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Horario del lugar</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Horario del lugar"
              value={horarioLugar}
              onChange={(e) => setHorarioLugar(e.target.value)}
              onInput={autoExpand}

            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción del lugar</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Descripción del lugar"
              value={descripcionLugar}
              onChange={(e) => setDescripcionLugar(e.target.value)}
              onInput={autoExpand}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Atracciones del lugar</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Atracciones del lugar"
              value={atraccionesLugar}
              onChange={(e) => setAtraccionesLugar(e.target.value)}
              onInput={autoExpand}

            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contacto del lugar</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Información de contacto"
              value={contactoLugar}
              onChange={(e) => setContactoLugar(e.target.value)}
              onInput={autoExpand}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Enlaces de fotos del lugar (separados por comas)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enlaces de fotos"
              value={fotosLugar}
              onChange={(e) => setFotosLugar(e.target.value)}
            />
          </Form.Group>
          <img id="image-preview" src={fotosLugar} alt="Vista previa" style={{ maxWidth: "50%" }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={guardarLugar}>
            {id ? "Guardar cambios del Lugar" : "Crear Lugar"}
          </Button>
          <Button variant="secondary" onClick={cerrarModalLugar}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CrearEditarLugares;