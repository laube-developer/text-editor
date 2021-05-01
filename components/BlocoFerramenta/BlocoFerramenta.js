import style from './style.module.css'

export default function BlocoFerramenta(props){
    return (
        <div className={style.bloco}>
            <i className={props.classe}></i>
            <a className={"color "+style[props.color]}></a>
        </div>
    )
}