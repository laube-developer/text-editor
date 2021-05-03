import style from './style.module.css'

export default function Opcoes(props){
    let object = (<></>)
    let tituloOps = ["H1", "H2", "H3"]
    let colorOps = ["Preto", "Cinza", "Roxo", "Azul", "Verde", "Amarelo", "Laranja", "Vermelho"]

    function trocaCor (cor){
        props.handleClick(props.state.tipo, props.state.headdingAtivo, cor, props.state.bgAtivo)
    };

    function trocaFundo (fundo){
        props.handleClick(props.state.tipo, props.state.headdingAtivo, props.state.colorAtivo, fundo)

    };

    switch (props.tipo){
        case 'Titulo':
        object = (
            <div className={style.boxItens}>
                {tituloOps.map(op=>{
                    return (
                        <div className={style.Opcao + " " + style[op.toLowerCase()]}>
                            <p><i className='fas fa-heading'></i>{op}</p>
                        </div>
                    )
                })}
            </div>
        )
        break;
        case "Cor do Texto":
            object = (
            <div className={style.boxTextoCores}>
                {colorOps.map(op=>{
                    return (
                        <div className={style.textoCor + " " + style[op]} onClick={()=>{trocaCor(op)}}></div>
                    )
                })}
            </div>
            )
        break;
        case "Background":
        object = (
            <div className={style.boxTextoCores}>
                {colorOps.map(op=>{
                    return (
                        <div className={style.textoCor + " " + style[op]} onClick={()=>{trocaFundo(op)}}></div>
                    )
                })}
            </div>
        )
        break;
    }

    return object;
}