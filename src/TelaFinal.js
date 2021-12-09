import IconeTopo from "./IconeTopo";

export default function TelaFinal(){
    return (
        <>
            <IconeTopo />
            {/* <TelaSucesso /> */}
            <TelaFracasso />
        </>
    )
}


function TelaSucesso (){
    return(
        <>
        <div className="resultado">
            <span>Parabéns!</span>
            <img src="./assets/party.png"/>
        </div>
        <div class="texto-resultado">Você não esqueceu de nenhum flashcard!</div>
    </>
    )
}

function TelaFracasso (){
    return(
        <>
        <div className="resultado">
            <span>Putz.. </span>
            <img src="./assets/sad.png"/>
        </div>
        <div class="texto-resultado">Você esqueceu alguns flashcards.. <br/>Não desanime! Na próxima você consegue!</div>
    </>
    )
}

