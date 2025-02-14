import "./index.css";
import icon01 from "../../assets/Elementos/monitoramento.svg";
import icon02 from "../../assets/Elementos/cam.svg";
import icon03 from "../../assets/Elementos/controle.svg";
import icon04 from "../../assets/response.png";
import icon05 from "../../assets/suport.png";
import icon06 from "../../assets/eco.png";


const vantagens = [
  {
    icon: icon01,
    title: "Monitoramento 24h",
    description: "Vigilância ininterrupta com equipe especializada.",
  },
  {
    icon:icon06,
    title: "Economia",
    description: "Reduza custos operacionais em até 70%.",
  },
  {
    icon:icon03,
    title: "Controle de Acesso",
    description: "Gestão eficiente via aplicativo móvel.",
  },
  {
    icon:icon04 ,
    title: "Resposta Imediata",
    description: "Atendimento rápido em emergências.",
  },
  {
    icon: icon02,
    title: "Câmeras com IA",
    description: "Detecção inteligente de ameaças.",
  },
  {
    icon: icon05,
    title: "Suporte 24h",
    description: "Assistência e manutenção contínua.",
  },
];

const Vantagens = () => {
  return (
    <section className="vantagens">
      <h2>Nossas Vantagens</h2>
      <div className="vantagens-grid">
        {vantagens.map((item, index) => (
          <div key={index} className="vantagem-card">
            <img src={item.icon} alt={item.title} className="vantagem-icon" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="container-button">
        <button className="button-info">
          <a href="#">Saiba mais</a>
        </button>
      </div>
    </section>
  );
};

export default Vantagens;
