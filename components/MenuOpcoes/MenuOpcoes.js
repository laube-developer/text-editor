import style from './style.module.css';
import { useState } from 'react'

import opcoes from './OpcoesMenuOpcoes/opcoes.json'

import ButtonClose from './ButtonClose/ButtonClose'
import ItemMenuOpcoes from './ItemMenuOpcoes/ItemMenuOpcoes'

export default function MenuOpcoes(props){
    const [opHeading, setOpHeading] = useState(opcoes)

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

                    <div className={style.scrollBox}>{
                        opHeading[props.state.tipo].map((item)=>{
                            return (
                                <ItemMenuOpcoes color={item}>{item}</ItemMenuOpcoes>
                            )
                        })}
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