const card = [
  { Q: "O que é JSX?", R: "Uma extensão de linguagem do JavaScript" },
  {
    Q: "O React é __",
    R: "uma biblioteca JavaScript para construção de interfaces",
  },
  { Q: "Componentes devem iniciar com __", R: "letra maiúscula" },
  { Q: "Podemos colocar __ dentro do JSX", R: " expressões" },
  {
    Q: "O ReactDOM nos ajuda __",
    R: "interagindo com a DOM para colocar componentes React na mesma",
  },
  {
    Q: "Usamos o npm para __",
    R: "gerenciar os pacotes necessários e suas dependências",
  },
  {
    Q: "Usamos props para __",
    R: "passar diferentes informações para componentes",
  },
  {
    Q: "Usamos estado (state) para __",
    R: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
  },
];

const botao = [
  { text: "Aprendi agora", cor: "preto" },
  { text: "Não lembrei", cor: "vermelho" },
  { text: "Lembrei com", cor: "verde" },
  { text: "Zap", cor: "amarelo" },
];

let cardNumero = "1/8";

export default function Card() {
  return (
    <>
      <div className="card">
        {/* <FrontCard /> */}
        <CardTras />
      </div>
    </>
  );
}

function FrontCard() {
  return (
    <div className="front-face">
      <div className="topo-card-frente">{cardNumero}</div>
      <span>{card[0].Q}</span>
      <div className="baixo-card-frente">
        <img src="./assets/turn.png" />
      </div>
    </div>
  );
}

function CardTras() {
  return (
    <div className="back-face">
      <div className="topo-card-tras">
        <span>{card[0].Q}</span>
        <div className="info-card">{cardNumero}</div>
      </div>
      <div className="resposta-card">{card[0].R}</div>
      <div className="baixo-card-tras">
        {botao.map(({ text, cor }) => {
          return <Botao text={text} cor={cor} />;
        })}
      </div>
    </div>
  );
}
function Botao({ text, cor }) {
  return <button className={cor}>{text}</button>;
}
