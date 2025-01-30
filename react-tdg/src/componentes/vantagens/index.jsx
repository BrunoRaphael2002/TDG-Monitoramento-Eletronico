
import "./index.css";

const vantagens = [
  {
    icon: "🛡️",
    title: "Monitoramento 24/7",
    description: "Vigilância ininterrupta com equipe especializada.",
  },
  {
    icon: "💰",
    title: "Economia",
    description: "Reduza custos operacionais em até 70%.",
  },
  {
    icon: "🔑",
    title: "Controle de Acesso",
    description: "Gestão eficiente via aplicativo móvel.",
  },
  {
    icon: "🚨",
    title: "Resposta Imediata",
    description: "Atendimento rápido em emergências.",
  },
  {
    icon: "📷",
    title: "Câmeras com IA",
    description: "Detecção inteligente de ameaças.",
  },
  {
    icon: "⏰",
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
            <span className="vantagem-icon">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vantagens;
