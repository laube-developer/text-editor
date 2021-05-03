import style from './style.module.css'

export default function BlocoFerramenta(props){
    function subirClick(){
        if(props.handleClick){
            props.handleClick()
        }
    }
    return (
        <div className={style.bloco} onDoubleClick={subirClick}>
            <i className={props.classe}></i>
            <a className={style[props.color]}></a>
        </div>
    )
}