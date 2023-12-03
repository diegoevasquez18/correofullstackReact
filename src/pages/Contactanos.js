import React from "react";

const Contactanos = (props) =>{
    return(
        <main>
            <div class="holder">
                <h3>Trabaja con nosotros!</h3>
                <p>En Correo Full Stack nos apasiona hacer. Nos adaptamos a los cambios y resolvemos de forma exitosa. Hacemos en movimiento. Pensamos en grande porque no tenemos miedo.Nos arriesgamos y animamos a resolver en el andar. Lo hacemos bien y, siempre, ¡lo logramos!</p>
                <form action="/">
                    <div class="info">
                    <input class="fname" type="text" name="name" placeholder="Nombre completo" />
                    <input type="text" name="name" placeholder="Email" />
                    <input type="text" name="name" placeholder="Provincia" />
                    <input type="text" name="name" placeholder="Ciudad" />
                    </div>
                    <p>Por que queres trabajar con nosotros?</p>
                    <div>
                    <textarea rows="4"></textarea>
                    </div>
                    <button type="submit" href="/">Postulate!</button>
                </form>
            </div>
        </main>
    )
}

export default Contactanos;