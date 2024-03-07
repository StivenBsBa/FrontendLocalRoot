import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import axios from 'axios';
import Constantes from "../../utils/Constantes";

function RestablecerPassword() {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [usuario, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleShowPasswordModal = () => {
    setShowPasswordModal(true);
  };

  const handleClosePasswordModal = () => {
    setShowPasswordModal(false);
  };

  const handleSavePassword = () => {
    if (usuario === "" || password === "" || confirmPassword === "") {
      Swal.fire('Error', 'Por favor, completa todos los campos.', 'error');
    } else if (password === confirmPassword) {
      const endPoint = `${Constantes.URL_BASE}/usuarios/updateUserPassword/${usuario}`;

      const Data = {
        usuario: usuario,
        password: password,
      };


      axios.put(endPoint, Data)
        .then((resp) => {
          console.log(resp.data);
          Swal.fire('Información', 'Contraseña actualizada con éxito', 'success');
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
    } else {
      Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
    }
  };

  return (
    <div>
      <a href="#" onClick={handleShowPasswordModal}>Olvidaste tu contraseña</a>
      <Modal show={showPasswordModal} onHide={handleClosePasswordModal}>
        <Modal.Header closeButton>
          <Modal.Title>Restablecer Contraseña</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre de usuario"
              value={usuario}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirmar Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirmar Contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSavePassword}>
            Cambiar Contraseña
          </Button>
          <Button variant="secondary" onClick={handleClosePasswordModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default RestablecerPassword;
