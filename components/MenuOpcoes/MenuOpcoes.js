import style from './style.module.css';
import { useState } from 'react'

import Opcoes from './OpcoesMenuOpcoes/Opcoes'

import ButtonClose from './ButtonClose/ButtonClose'
import ItemMenuOpcoes from './ItemMenuOpcoes/ItemMenuOpcoes'

export default function MenuOpcoes(props){

    //fecha o menu, caso clique fora da caixa
    function fechaMenu(event){
        let classe = event.target.getAttribute('class');
        if(classe != null){
            if(classe.indexOf("MenuOpcoes") != -1){
                props.handleAtivaMenu()
            }
        }
    }

    if(props.state.isAtivo){
        return(
            <div className={style.MenuOpcoes} onClick={fechaMenu}>

                <div className={style.Menu}> 

                    <div className={style.header}>
                        <h3>{props.state.tipo}</h3>
                        <ButtonClose handleClick={props.handleAtivaMenu}/>
                    </div>

                    <div className={style.scrollBox}>
                        <Opcoes tipo={props.state.tipo} handleClick={props.handleAtivaMenu} state={props.state}/>
                    </div>

                </div>
                
            </div>
        )
    }else{
        return (
            <></>
        )
    }
}