import React from 'react'
import { useState, useEffect } from 'react'
import styles from './style.module.css'

import BarraDeFerramentas from '../BarraDeFerramentas/BarraDeFerramentas'
import MenuOpcoes from '../MenuOpcoes/MenuOpcoes'

function NotaBloco(props){
    const [stateMenu, setStateMenu] = useState({
        isAtivo: false,
        tipo: '',
        headdingAtivo: "",
        colorAtivo: "Vermelho",
        bgAtivo: "Amarelo"
    })

    function atualizaEstado(tipo, hAtivo, corAtivo, bgAtivo){
        let estado = {
            isAtivo: !stateMenu.isAtivo,
            tipo: tipo
        }
        estado.headdingAtivo = hAtivo ? hAtivo : stateMenu.headdingAtivo;
        estado.colorAtivo = corAtivo ? corAtivo : stateMenu.colorAtivo;
        estado.bgAtivo = bgAtivo ? bgAtivo : stateMenu.bgAtivo;

        setStateMenu(estado)
    }

    return (
        <div className={styles.error}>
            <BarraDeFerramentas handleAtivaMenu={atualizaEstado} state={stateMenu}/>
            <div id='titulo'><h1>{props.titulo}</h1></div>
            <MenuOpcoes state={stateMenu} handleAtivaMenu={atualizaEstado}/>
        </div>
    )
}

export default NotaBloco;