


export default function TelaInicial(props){
    return (
        <>
            <img className="imagem-inicial" src="./assets/logo.png"/>
            <button className="botao-inicial" onClick={() => {props.mudaPagina('App')}} >
                <p>Praticar react</p>
                <img src="./assets/next.png"/>
            </button>
        </>
        
    )
}