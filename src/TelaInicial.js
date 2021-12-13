import logo from "./assets/logo.png"
import next from "./assets/next.png"

export default function TelaInicial(props){
    return (
        <>
            <img className="imagem-inicial" src={logo} alt="error" />
            <button className="botao-inicial"  onClick={() => {props.mudaPagina('App')}} data-identifier="start-zap-recall" >
                <p>Praticar react</p>
                <img src={next} alt="error" data-identifier="arrow"/>
            </button>
        </>
        
    )
}