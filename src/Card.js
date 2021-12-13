import { useState } from "react";
import virar from "./assets/turn.png"

const cards = [
  { questao: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript" },
  {
    questao: "O React é __",
    resposta: "uma biblioteca JavaScript para construção de interfaces",
  },
  { questao: "Componentes devem iniciar com __", resposta: "letra maiúscula" },
  { questao: "Podemos colocar __ dentro do JSX", resposta: " expressões" },
  {
    questao: "O ReactDOM nos ajuda __",
    resposta: "interagindo com a DOM para colocar componentes React na mesma",
  },
  {
    questao: "Usamos o npm para __",
    resposta: "gerenciar os pacotes necessários e suas dependências",
  },
  {
    questao: "Usamos props para __",
    resposta: "passar diferentes informações para componentes",
  },
  {
    questao: "Usamos estado (state) para __",
    resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
  },
];




const botao = [
  { text: "Aprendi agora", cor: "preto" },
  { text: "Não lembrei", cor: "vermelho" },
  { text: "Lembrei com dificuldade", cor: "verde" },
  { text: "Zap", cor: "amarelo" },
];


export default function Card({mudaPagina}) {
  const [numeroCard , setnumeroCard] = useState(0)
  const [numeroTopoInfo, setNumeroTopoInfo] = useState(numeroCard + 1)

  const [cartaState , setCartaState] = useState("Pergunta")
  const [cardAtual , setCardAtual] = useState([... cards])

  const [vitoriaState, setVitoriaState] = useState(true)
  
  if(numeroCard === 8){
    if(vitoriaState === true){
      mudaPagina("AcertouTodas")
      return null
    }
    mudaPagina("Acabou")
    return null
  }

  return (
    <>
      <div className="card">
        {cartaState === "Pergunta" ? <FrontCard data-identifier="flashcard" mudaLado ={setCartaState} numeroTopoInfo={numeroTopoInfo} numeroCard={numeroCard} cardAtual={cardAtual}/> : <CardTras cardAtual={cardAtual} numeroTopoInfo={numeroTopoInfo} numeroCard={numeroCard} mudaCarta={setnumeroCard} mudaInfo={setNumeroTopoInfo} mudaLado ={setCartaState} mudaVitoria={setVitoriaState} condicaoVitoria={vitoriaState}/>}
      </div>
    </>
  );
}


function FrontCard({mudaLado , numeroTopoInfo, numeroCard , cardAtual}) {

  

  return (
    <div className="front-face">
      <div className="topo-card-frente" data-identifier="counter" >{numeroTopoInfo}/8</div>
      <span>{cardAtual[numeroCard].questao}</span>
      <div className="baixo-card-frente">
        <img src={virar} alt="error"  onClick={() => {mudaLado("Resposta")}}/>
      </div>
    </div>
  );
}

function CardTras({numeroCard, mudaCarta, numeroTopoInfo, mudaInfo, mudaLado, cardAtual, condicaoVitoria, mudaVitoria}) {
  return (
    <div className="back-face">
      {cards.map((card) => {return  <InfoCard data-identifier="flashcard" questao={cardAtual[numeroCard].questao} resposta={cardAtual[numeroCard].resposta} numeroTopoInfo={numeroTopoInfo} numeroCard={numeroCard}/>
        })}
      <div className="baixo-card-tras">
        {botao.map(({ text, cor }) => {
          return <Botao text={text} cor={cor} numeroCard={numeroCard} mudaCarta={mudaCarta} mudaInfo={mudaInfo} mudaLado ={mudaLado} mudaVitoria={mudaVitoria} condicaoVitoria={condicaoVitoria}/>;
        })} 
      </div>
    </div>
  );
}
function Botao({ text, cor, mudaCarta, numeroCard, mudaInfo, numeroTopoInfo, mudaLado, mudaVitoria, condicaoVitoria}) {
  return (
  <button onClick={() => {mudaTudo(numeroCard, mudaLado, mudaCarta, mudaInfo, mudaVitoria,  condicaoVitoria, cor)}} className={cor}>
    {text}
  </button>
  )
}



function InfoCard({questao, resposta, numeroTopoInfo, numeroCard}){
  return (
    <>
    <div className="topo-card-tras">
      <span>{questao}</span>
      <div data-identifier="counter" className="info-card">{numeroTopoInfo}/{8}</div>
    </div>
    <div className="resposta-card">{resposta}</div>
    </>
  )
  
}


function mudaTudo(numeroCard, mudaLado, mudaCard, mudaInfo,  mudaVitoria, condicaoVitoria, cor){
  console.log({condicaoVitoria})
  if(cor === "vermelho"){
    mudaVitoria(false)


  }
  
  
  mudaLado("Pergunta")
  mudaCard(numeroCard + 1)
  mudaInfo(numeroCard + 2)

}
