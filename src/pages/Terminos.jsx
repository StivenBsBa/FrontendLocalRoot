import React from "react";
import Footer from "../components/Footer"
import Header from "../components/Header"


const terminos = () => {
    return (
        <div>

            <Header />
            <div className="construction-container container">
                <h1>¡Estamos trabajando en ello!</h1>
                <p>Esta pestaña está en construcción y aún no está disponible. Nuestro equipo está trabajando arduamente para brindarte contenido de alta calidad que te encantará.</p>
                <p>Te pedimos disculpas por cualquier inconveniente que esto pueda causar. Mientras tanto, puedes explorar otras secciones de nuestro sitio web para obtener información interesante y útil sobre nuestro destino.</p>
                <p>Agradecemos tu paciencia y esperamos que vuelvas pronto para disfrutar de lo que estamos preparando para ti.</p>
            </div>

            <Footer />
        </div>

    )
}

export default terminos;