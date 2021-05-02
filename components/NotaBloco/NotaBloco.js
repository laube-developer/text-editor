import React from 'react'
import { useState, useEffect } from 'react'
import styles from './style.module.css'

import BarraDeFerramentas from '../BarraDeFerramentas/BarraDeFerramentas'
import MenuOpcoes from '../MenuOpcoes/MenuOpcoes'

function NotaBloco(props){
    const [stateMenu, setStateMenu] = useState({
        isAtivo: false,
        tipo: ''
    })

    function ativarDesativarMenu(tipo){
        setStateMenu({
            isAtivo: !stateMenu.isAtivo,
            tipo: tipo
        })
    }

    return (
        <div className={styles.error}>
            <BarraDeFerramentas handleAtivaMenu={ativarDesativarMenu}/>
            <div id='titulo'><h1>{props.titulo}</h1></div>
            <MenuOpcoes state={stateMenu} handleAtivaMenu={ativarDesativarMenu}/>
        </div>
    )
}

export default NotaBloco;