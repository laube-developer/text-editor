import React from 'react'
import { useState, useEffect } from 'react'
import styles from './style.module.css'

import BarraDeFerramentas from '../BarraDeFerramentas/BarraDeFerramentas'
import MenuOpcoes from '../MenuOpcoes/MenuOpcoes'

function NotaBloco(props){
    return (
        <div className={styles.error}>
            <BarraDeFerramentas/>
            <div id='titulo'><h1>{props.titulo}</h1></div>
            <MenuOpcoes show='none'/>
        </div>
    )
}

export default NotaBloco;