import React from "react";

const Servicios = (props) =>{
    return(
        <main class="holder">
        <h2>Servicios</h2>
        <div class="servicio">
            <img src="https://images.vexels.com/media/users/3/157444/isolated/preview/cac65f0418e3896e226f803751364216-icono-de-sobre-de-marketing.png" alt="sobre"/>
            <div class="info">
                <h3>Sobre</h3>
                <p>Servicio para el envío de correspondencia y documentación, a todo el país, con trazabilidad en cada parte del proceso y constancia de entrega.</p>
            </div>
        </div>
        <div class="servicio">
            <img src="https://static.vecteezy.com/system/resources/previews/012/808/489/original/delivery-box-with-check-mark-parcel-security-3d-render-png.png" alt="paquetería"/>
            <div class="info">
                <h3>Paqueteria</h3>
                <p>Servicio de distribución de paquetería hasta 50 kg, a todo el país, con entrega en domicilio o en nuestras más de 135 sucursales y puntos Correo Full Stack. Con seguimiento online las 24 hs y notificaciones por e-mail.</p>
            </div>
        </div>
        <div class="servicio">
            <img src="https://cdn-icons-png.flaticon.com/512/2744/2744146.png" alt="equipaje"/>
            <div class="info">
                <h3>Viaje sin equipaje</h3>
                <p>Servicio diseñado para el traslado de distintos tipos de artículos a cualquier destino, en verano e invierno, tanto a la ida como a la vuelta del receso. ¡El momento de viajar se vuelve más fácil y cómodo!</p>
            </div>
        </div>         
    </main>
    )
}

export default Servicios;