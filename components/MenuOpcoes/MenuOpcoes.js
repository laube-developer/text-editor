import style from './style.module.css';

import ButtonClose from './ButtonClose/ButtonClose'

export default function MenuOpcoes(props){
    return(
        <div className={style.MenuOpcoes + " " + style[props.show]}>
            <div className={style.Menu}> 
                <ButtonClose/>
                <div>
                    <p>CLique aqui</p>
                </div>
            </div>
            
        </div>
    )
}