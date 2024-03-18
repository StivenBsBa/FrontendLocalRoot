import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "../styles/perfil.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import VerEvento from "../components/verEvento";
import Lugares from "../components/Lugares";
import CrearEditarEvento from "../components/CrearEditarEvento";
import CrearEditarLugares from "../components/CrearEditarLugares";
import axios from "axios";
import Constantes from "../../utils/Constantes";
import Swal from "sweetalert2";
import EditPerfil from "../components/editPerfil";

const Perfil = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const [DataEvento, setDataEvento] = useState([]);
  const [DataEventoLIke, setDataEventoLike] = useState([]);
  const [DataLugar, setDataLugar] = useState([]);
  const [DataLugarLike, setDataLugarLike] = useState([]);
  const [Datauser, setDatauser] = useState([]);
  const { username } = useParams();

  const handleOneUser = async () => {

    const endPoin = `${Constantes.URL_BASE}/usuarios/findusername/${username}`;

    await axios
      .get(endPoin, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        setDatauser(resp.data.result);
       
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


  async function handlEventolike() {
    const endPoin = `${Constantes.URL_BASE}/eventos/listEventosLike/${username}`;
    await axios
      .get(endPoin, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        setDataEventoLike(resp.data.result);
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
  }
  //consumo para ver los eventos creados por el usuario
  async function handleEvento() {
    const endPoin = `${Constantes.URL_BASE}/eventos/listEventoscreados/${username}`;

    await axios
      .get(endPoin, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        setDataEvento(resp.data.result);
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
  }
  //consumo para ver los lugares creados por el usuario y favoritos

  async function handleLugar() {
    const endPoin = `${Constantes.URL_BASE}/lugares/listlugarescreados/${username}`;
    await axios
      .get(endPoin, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        setDataLugar(resp.data.result);
        console.log(DataLugar);
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
  }

  async function handleLugarlikelistar() {
    const endPoin = `${Constantes.URL_BASE}/lugares/listlugaresLike/${username}`;
    await axios
      .get(endPoin, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        setDataLugarLike(resp.data.result);
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
  }
  const redirigirAbminUser = () => {
    navigate("/AbminListUser");
  };
  useEffect(() => {
    handleEvento();
    handlEventolike();
    handleOneUser();
    handleLugar();
    handleLugarlikelistar();
  }, []);

  return (
    <div className="contGeneral">
      <Header />
      <div className="contenedor-perfil">
        <div className="encabezado-perfil">
          <div>
            <img src={Datauser.foto} alt="Foto de perfil" />
            <EditPerfil />
          </div>
          <div className="descrip-pefil">
            <div className="nombre">
              <h6 className="nombre-perfil"> Nombre: {Datauser.nombres}</h6>
              <h6 className="usuario-perfil">Usuario: {username}</h6>
            </div>
            <h6 className="usuario-perfil">Email: {Datauser.email}</h6>
            <div className="nombre">
              {Datauser.TipoUsuario &&
              Datauser.TipoUsuario.includes("administrador") ? (
                <h6 className="usuario-perfil">
                  Eventos creados: {DataEvento.length}
                </h6>
              ) : null}

              <h6 className="usuario-perfil">
                Eventos guardados: {DataEventoLIke.length}
              </h6>
            </div>
            <div className="nombre">
              {Datauser.TipoUsuario &&
              Datauser.TipoUsuario.includes("administrador") ? (
                <h6 className="usuario-perfil">
                  Lugares creados: {DataLugar.length}
                </h6>
              ) : null}
              <h6 className="usuario-perfil">
                Lugares guardados: {DataLugarLike.length}
              </h6>
            </div>
          </div>
        </div>
        <div>
          {Datauser.TipoUsuario &&
          Datauser.TipoUsuario.includes("SuperAdministrador") ? (
            <div className="crearEvento">
              <button onClick={redirigirAbminUser}>Abministrar usuario</button>
            </div>
          ) : null}
        </div>
        <div>
          {Datauser.TipoUsuario &&
          Datauser.TipoUsuario.includes("administrador") ? (
            <div className="crearEvento">
              <CrearEditarEvento />
              <CrearEditarLugares />
            </div>
          ) : null}
        </div>
        <div className="secciones">
          <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            {Datauser.TipoUsuario &&
            Datauser.TipoUsuario.includes("administrador") ? (
              <Tab eventKey="evento creado" title="Eventos creados">
                {DataEvento.length > 0 ? (
                  <div>
                    <h4>Estos son tus eventos creados</h4>
                    <VerEvento eventos={DataEvento} />
                  </div>
                ) : (
                  <div>
                    <h4>NO tienes eventos creados</h4>
                  </div>
                )}
              </Tab>
            ) : null}

            <Tab eventKey="evento favoritos" title="Eventos favoritos">
              {DataEventoLIke.length > 0 ? (
                <div>
                  <h4>Estos son tus eventos favoritos</h4>
                  <VerEvento eventos={DataEventoLIke} />
                </div>
              ) : (
                <div>
                  <h4>NO tienes eventos favoritos</h4>
                </div>
              )}
            </Tab>

            {Datauser.TipoUsuario &&
            Datauser.TipoUsuario.includes("administrador") ? (
              <Tab eventKey="lugar creado" title="Lugares Creados">
                {DataLugar.length > 0 ? (
                  <div>
                    <h4>Estos son tus lugares creados</h4>
                    <Lugares lugaresData={DataLugar} />
                  </div>
                ) : (
                  <div>
                    <h4>NO tienes eventos creados</h4>
                  </div>
                )}
              </Tab>
            ) : null}

            <Tab eventKey="lugar favoritos" title="Lugares favoritos">
              {DataLugarLike.length > 0 ? (
                <div>
                  <h4>Estos son tus lugares favoritos</h4>
                  <Lugares lugaresData={DataLugarLike} />
                </div>
              ) : (
                <div>
                  <h4>NO tienes eventos favoritos</h4>
                </div>
              )}
            </Tab>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Perfil;
