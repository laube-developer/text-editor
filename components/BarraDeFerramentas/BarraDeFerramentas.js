import style from './style.module.css'
import BlocoFerramenta from '../BlocoFerramenta/BlocoFerramenta'
import DivisaoBlocos from '../DivisaoBlocos/DivisaoBlocos'

export default function BarraDeFerramentas(){
    return (
        <div className={style.error}>
            <BlocoFerramenta classe='fas fa-heading'/>
            <DivisaoBlocos/>
            <BlocoFerramenta classe='fas fa-bold'/>
            <DivisaoBlocos/>
            <BlocoFerramenta classe='fas fa-italic'/>
            <DivisaoBlocos/>
            <BlocoFerramenta classe='fas fa-paint-roller'color='yellow'/>
            <DivisaoBlocos/>
            <BlocoFerramenta classe='fas fa-marker'color='yellow'/>
            <DivisaoBlocos/>
            <BlocoFerramenta classe='fas fa-bold'/>

        </div>
    )
}