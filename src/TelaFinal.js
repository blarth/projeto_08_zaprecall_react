import IconeTopo from "./IconeTopo";
import party from "./assets/party.png"
import sad from "./assets/sad.png"
export default function TelaFinal({condicao}){
    return (
        <>
            <IconeTopo />
            {condicao === "vitoria" ? <TelaSucesso /> : <TelaFracasso />}
            
        </>
    )
}


function TelaSucesso (){
    return(
        <>
        <div className="resultado">
            <span>Parabéns!</span>
            <img src={party} alt="error"/>
        </div>
        <div className="texto-resultado">Você não esqueceu de nenhum flashcard!</div>
    </>
    )
}

function TelaFracasso (){
    return(
        <>
        <div className="resultado">
            <span>Putz.. </span>
            <img src={sad} alt="error"/>
        </div>
        <div className="texto-resultado">Você esqueceu alguns flashcards.. <br/>Não desanime! Na próxima você consegue!</div>
    </>
    )
}

