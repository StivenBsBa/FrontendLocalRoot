import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import axios from 'axios';
import Constantes from "../../utils/Constantes";
import "../styles/perfil.css";

function editPerfil() {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  
  const [nombres, setnombres] = useState("");
  const [email, setemail] = useState("");
  const [foto, setfoto] = useState("");
  

  const handleShowfotoModal = () => {
    setShowPasswordModal(true);
  };

  const handleCloseFotoModal = () => {
    setShowPasswordModal(false);
  };
  const usuario = localStorage.getItem("username")
  useEffect(() => {
    if (usuario) {
      handleOneUsuario();
    }
  }, [usuario]);
  const handleOneUsuario = () => {
    const endPoint = `${Constantes.URL_BASE}/usuarios/findusername/${usuario}`;

    axios
      .get(endPoint)
      .then((resp) => {
        const UsuarioData = resp.data.result;
        setnombres(UsuarioData.nombres);
        setemail(UsuarioData.email);
        setfoto(UsuarioData.foto);
        
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

  const handleEditPerfil = () => {
    if (nombres ==="",email==="", foto ===  "") {
      Swal.fire('Error', 'Por favor, ingresa todos lso datos.', 'error');
    } else {
      const endPoint = `${Constantes.URL_BASE}/usuarios/updateUser/${usuario}`;

      const Data = {
        nombres:nombres,
        email:email,
        usuario: usuario,
        foto: foto,
      };


      axios.put(endPoint, Data)
        .then((resp) => {
          Swal.fire('Información', 'foto actualizada con éxito', 'success');
          window.location.reload();

        })
        .catch((error) => {
          console.log(error);
          if (error.response.status == 400 || error.response.status === 404) {
            Swal.fire('Informacion!', error.response.data.message, 'error');
          } else {
            Swal.fire('Informacion!', 'Ocurrio un error', 'error');
          }
        });
    }
  };

  return (
    <div>
      <button className="edit-button" onClick={handleShowfotoModal}>
        <svg className="edit-svgIcon" viewBox="0 0 512 512">
          <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
        </svg>
        
      </button>
      
      <Modal show={showPasswordModal} onHide={handleCloseFotoModal}>
        <Modal.Header closeButton>
          <Modal.Title>cambiar foto de perfil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <Form.Group className="mb-3">
            <Form.Label>Ingresar el nombre del usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="nombre"
              value={nombres}
              onChange={(e) => setnombres(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Ingresar el email</Form.Label>
            <Form.Control
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Ingreas el link de la foto</Form.Label>
            <Form.Control
              type="text"
              placeholder="foto"
              value={foto}
              onChange={(e) => setfoto(e.target.value)}
            />
          <img id="image-preview" src={foto} alt="Vista previa" style={{ maxWidth: "50%" }} />

          </Form.Group>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleEditPerfil}>
            Cambiar Contraseña
          </Button>
          <Button variant="secondary" onClick={handleCloseFotoModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default editPerfil;
