import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import axios from "axios";
import Constantes from "../../utils/Constantes";
import "../styles/CrearEvento.css";

function CrearEditarEvento() {
  const [showEventModal, setShowEventModal] = useState(false);
  const { id } = useParams();

  const [nombreEvento, setNombreEvento] = useState("");
  const [organizador, setOrganizador] = useState("");
  const [fechaInicioEvento, setFechaInicioEvento] = useState("");
  const [horaInicioEvento, setHoraInicioEvento] = useState("");
  const [fechaFinEvento, setFechaFinEvento] = useState("");
  const [horaFinEvento, setHoraFinEvento] = useState("");
  const [ubicacionEvento, setUbicacionEvento] = useState("");
  const [descripcionEvento, setDescripcionEvento] = useState("");
  const [categoriaEvento, setCategoriaEvento] = useState([]);
  const [costoEntrada, setCostoEntrada] = useState("");
  const [imageEvento, setimageEvento] = useState("");
  const [contactoEvento, setContactoEvento] = useState("");
  const [entradaGratis, setEntradaGratis] = useState(false);

  useEffect(() => {
    if (id) {
      // Si se proporciona un ID, estamos en modo edición, así que cargamos los datos del evento
      handleOneEvento();
    }
  }, [id]);

  const handleOneEvento = () => {
    const endPoint = `${Constantes.URL_BASE}/eventos/findbyidEvento/${id}`;

    axios
      .get(endPoint)
      .then((resp) => {
        const eventoData = resp.data.result;
        setNombreEvento(eventoData.nombre);
        setOrganizador(eventoData.organizador);
        setFechaInicioEvento(eventoData.fechaInicioEvento);
        setHoraInicioEvento(eventoData.horaInicioEvento);
        setFechaFinEvento(eventoData.fechaFinEvento);
        setHoraFinEvento(eventoData.horaFinEvento);
        setUbicacionEvento(eventoData.ubicacion);
        setDescripcionEvento(eventoData.descripcion);
        setCategoriaEvento(eventoData.categoria);
        if (eventoData.costoEntrada === "Gratis") {
          setEntradaGratis(true);
          setCostoEntrada("");
        } else {
          setEntradaGratis(false);
          setCostoEntrada(eventoData.costoEntrada);
        }
        setContactoEvento(eventoData.contacto);
        setimageEvento(eventoData.imageEvento);
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

  const mostrarModalEvento = () => {
    setShowEventModal(true);
  };

  const cerrarModalEvento = () => {
    setShowEventModal(false);
  };

  const handleCategoriaCheckbox = (isChecked, category) => {
    if (isChecked) {
      // Agregar la categoría a la lista
      setCategoriaEvento([...categoriaEvento, category]);
    } else {
      // Quitar la categoría de la lista
      setCategoriaEvento(categoriaEvento.filter((c) => c !== category));
    }
  };

  // Función para convertir la hora de 24 horas a AM/PM
  function convertirHoraAPM(hora24) {
    const [hora, minutos] = hora24.split(":");
    let horaAMPM = hora;
    const ampm = parseInt(hora) < 12 ? "AM" : "PM";

    if (horaAMPM > 12) {
      horaAMPM = horaAMPM - 12;
    }

    return `${horaAMPM}:${minutos} ${ampm}`;
  }

  const handleGuardarEvento = () => {
    if (
      nombreEvento.trim() === "" ||
      fechaInicioEvento.trim() === "" ||
      horaInicioEvento.trim() === "" ||
      fechaFinEvento.trim() === "" ||
      horaFinEvento.trim() === "" ||
      ubicacionEvento.trim() === "" ||
      descripcionEvento.trim() === "" ||
      categoriaEvento.length === 0 ||
      (!entradaGratis && costoEntrada.trim() === "") ||
      contactoEvento.trim() === "" ||
      imageEvento.trim() === "" ||
      organizador.trim() === ""
    ) {
      Swal.fire("Error", "Por favor, completa todos los campos.", "error");
    } else {
      // Convertir la hora de 24 horas a AM/PM
      const horaInicioAMPM = convertirHoraAPM(horaInicioEvento);
      const horaFinAMPM = convertirHoraAPM(horaFinEvento);

      const endPoint = id
        ? `${Constantes.URL_BASE}/eventos/updateEvento/${id}`
        : `${Constantes.URL_BASE}/eventos/createEvento`;

      const datosEvento = {
        usuario: localStorage.getItem("username"),
        nombre: nombreEvento,
        fechaInicioEvento: fechaInicioEvento,
        horaInicioEvento: horaInicioAMPM,
        fechaFinEvento: fechaFinEvento,
        horaFinEvento: horaFinAMPM,
        ubicacion: ubicacionEvento,
        descripcion: descripcionEvento,
        categoria: categoriaEvento,
        costoEntrada: entradaGratis ? "Gratis" : costoEntrada,
        contacto: contactoEvento,
        imageEvento: imageEvento,
        organizador: organizador,
      };

      const axiosMethod = id ? axios.put : axios.post;

      axiosMethod(endPoint, datosEvento)
        .then((resp) => {
          console.log(resp);
          Swal.fire(
            "Información",
            id ? "Evento actualizado con éxito" : "Evento creado con éxito",
            "success"
          );
          cerrarModalEvento();
          window.location.reload();
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
    }
  };

  function autoExpand(e) {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }
  const categoriasDiferentes = [
    "Entretenimiento",
    "Arte y Cultura",
    "Festivales",
    "Educación",
    "Alimentación y Bebidas",
    "Salud y Bienestar",
    "Tecnología",
    "Negocios y Finanzas",
    "Medio Ambiente",
    "Comunidad y Voluntariado",
  ];

  return (
    <div>
      
      <Button className="crear-evento-button" variant="outline-primary" onClick={mostrarModalEvento}>
        {id ? "Editar Evento" : "Crear Evento"}
      </Button>{" "}
      
      <Modal
        className="custom-modal"
        show={showEventModal}
        onHide={cerrarModalEvento}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">
            {id ? "Editar Evento" : "Crear Evento"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Nombre del evento</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre del evento"
              value={nombreEvento}
              onChange={(e) => setNombreEvento(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nombre del Organizador</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre del organizador"
              value={organizador}
              onChange={(e) => setOrganizador(e.target.value)}
            />
          </Form.Group>
          <div className="d-flex">
            <Form.Group className="mb-3 me-3">
              <Form.Label>Fecha de inicio</Form.Label>
              <Form.Control
                type="date"
                value={fechaInicioEvento}
                onChange={(e) => setFechaInicioEvento(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Hora de inicio</Form.Label>
              <Form.Control
                type="time"
                value={horaInicioEvento}
                onChange={(e) => setHoraInicioEvento(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className="d-flex">
            <Form.Group className="mb-3 me-3">
              <Form.Label>Fecha de finalización</Form.Label>
              <Form.Control
                type="date"
                value={fechaFinEvento}
                onChange={(e) => setFechaFinEvento(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Hora de finalización</Form.Label>
              <Form.Control
                type="time"
                value={horaFinEvento}
                onChange={(e) => setHoraFinEvento(e.target.value)}
              />
            </Form.Group>
          </div>
          <Form.Group className="mb-3">
            <Form.Label>Ubicación</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ubicación"
              value={ubicacionEvento}
              onChange={(e) => setUbicacionEvento(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción del evento</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Descripción del evento"
              value={descripcionEvento}
              onChange={(e) => setDescripcionEvento(e.target.value)}
              onInput={autoExpand}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Categoría del evento</Form.Label>
            <div className="row">
              {categoriasDiferentes.map((categoria, index) => (
                <div className="col-4" key={index}>
                  <Form.Check
                    type="checkbox"
                    id={`categoria${index + 1}`}
                    label={categoria}
                    checked={categoriaEvento.includes(categoria)}
                    onChange={(e) =>
                      handleCategoriaCheckbox(e.target.checked, categoria)
                    }
                  />
                </div>
              ))}
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contacto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Información de contacto"
              value={contactoEvento}
              onChange={(e) => setContactoEvento(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Entrada Gratuita"
              checked={entradaGratis}
              onChange={(e) => setEntradaGratis(e.target.checked)}
            />
          </Form.Group>
          {!entradaGratis && (
            <Form.Group className="mb-3">
              <Form.Label>Costo o precio de entrada</Form.Label>
              <Form.Control
                type="text"
                placeholder="Costo o precio de entrada"
                value={costoEntrada}
                onChange={(e) => setCostoEntrada(e.target.value)}
              />
            </Form.Group>
          )}

          <Form.Group className="mb-3">
            <Form.Label>Enlace de la imagen del evento</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enlace de la imagen"
              value={imageEvento}
              onChange={(e) => setimageEvento(e.target.value)}
            />
          </Form.Group>
          <img
            id="image-preview"
            src={imageEvento} // Mostrar la imagen desde el enlace proporcionado
            alt="Vista previa"
            style={{ maxWidth: "50%" }}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleGuardarEvento}>
            {id ? "Guardar cambios del Evento" : "Crear Evento"}
          </Button>
          <Button variant="secondary" onClick={cerrarModalEvento}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CrearEditarEvento;
  