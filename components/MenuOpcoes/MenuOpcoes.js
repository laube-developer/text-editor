import style from './style.module.css';

export default function MenuOpcoes(props){
    return(
        <div className={style.MenuOpcoes + " " + style[props.show]}>
            <div>
                <p>Texto de Teste</p>
            </div>
        </div>
    )
}