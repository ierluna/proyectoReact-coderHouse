import React from 'react'
import {CartWidget} from "./CartWidget/CartWidget";
import './styles.css'


export const NavBar = () => {

    return (

        <header className="encabezado">
            
            <h1>TIENDA RIVOLTA</h1>

            <nav>
                <a href="">Inicio |</a>
                <a href=""> Catálogo |</a>
                <a href=""> Politica de cambios |</a>
                <a href=""> Contacto |</a>
 
            </nav>

            
            <CartWidget/>

        </header>
    )


}

