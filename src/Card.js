import { useState } from "react";

const card = [
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
  { text: "Lembrei com", cor: "verde" },
  { text: "Zap", cor: "amarelo" },
];


export default function Card() {
  const [numeroCard , setnumeroCard] = useState(0)
  let numeroInfo = numeroCard + 1

  const [cartaState , setCartaState] = useState("Pergunta")

  return (
    <>
      <div className="card">
        {cartaState === "Pergunta" ? <FrontCard  mudaLado ={setCartaState} infoCard={numeroInfo} numeroCard={numeroCard}/> : <CardTras infoCard={numeroCard} mudaCarta={setnumeroCard}/>}
      </div>
    </>
  );
}


function FrontCard(props) {
  return (
    <div className="front-face">
      <div className="topo-card-frente">{props.numeroInfo}</div>
      <div>{card[props.numeroCard]}</div>
      <div className="baixo-card-frente">
        <img src="./assets/turn.png"  onClick={() => {props.mudaLado("Resposta")}}/>
      </div>
    </div>
  );
}

function CardTras({numeroCard, mudaCarta}) {
  return (
    <div className="back-face">
      {card.map(({questao , resposta}) => { return <InfoCard  questao={questao} resposta={resposta} infoCard={numeroCard}/>})}
      <div className="baixo-card-tras">
        {botao.map(({ text, cor }) => {
          return <Botao text={text} cor={cor} infoCard={numeroCard} mudaCarta={mudaCarta}/>;
        })}
      </div>
    </div>
  );
}
function Botao({ text, cor, mudaCarta, infoCard }) {
  return <button onCLick={mudaCarta(infoCard)} className={cor}>{text}</button>;
}


function InfoCard(props){
  return (
    <>
    <div className="topo-card-tras">
      <span>{props.questao}</span>
      <div className="info-card">{props.numeroCard}</div>
    </div>
    <div className="resposta-card">{props.resposta}</div>
    </>
  )
  
}

