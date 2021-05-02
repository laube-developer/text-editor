import style from './style.module.css'

export default function ItemMenuOpcoes(props){
    return (
        <div className={style.Item + " " + style[props.color]}>
            <p>{props.children.replace("bg_", "")}</p>
        </div>
    )
}