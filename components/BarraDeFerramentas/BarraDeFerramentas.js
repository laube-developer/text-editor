import style from './style.module.css'
import BlocoFerramenta from '../BlocoFerramenta/BlocoFerramenta'
import DivisaoBlocos from '../DivisaoBlocos/DivisaoBlocos'

export default function BarraDeFerramentas(props){
    return (
        <div className={style.error}>
            <BlocoFerramenta classe='fas fa-heading' handleClick={()=>{props.handleAtivaMenu('Titulo')}}/>
            <DivisaoBlocos/>
            <BlocoFerramenta classe='fas fa-bold'/>
            <DivisaoBlocos/>
            <BlocoFerramenta classe='fas fa-italic'/>
            <DivisaoBlocos/>
            <BlocoFerramenta classe='fas fa-underline'/>
            <DivisaoBlocos/>
            <BlocoFerramenta classe='fas fa-paint-roller' color={props.state.colorAtivo} handleClick={()=>{props.handleAtivaMenu('Cor do Texto')}}/>
            <DivisaoBlocos/>
            <BlocoFerramenta classe='fas fa-marker' color={props.state.bgAtivo} handleClick={()=>{props.handleAtivaMenu('Background')}}/>

        </div>
    )
}