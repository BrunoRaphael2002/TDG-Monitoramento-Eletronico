import "./index.css";

const Servicos = () => {
  return (
    <section className="servicos">
      <h2>Nossos Serviços</h2>
      <div className="servicos-container">
        {/* Soluções Integradas */}
        <div className="card solucao">
          <h3>Soluções Integradas de Segurança</h3>
          <ul>
            <li>✅ Monitoramento 24/7 com central própria</li>
            <li>✅ Câmeras Full HD com análise de IA</li>
            <li>✅ Controle de acesso biométrico</li>
            <li>✅ Sistema de botão de pânico</li>
            <li>✅ Comunicação integrada com elevadores</li>
            <li>✅ Controle exclusivo de acesso à garagem</li>
            <li>✅ Sistema de alarme perimetral avançado</li>
          </ul>
        </div>

        {/* Vigilância Inteligente */}
        <div className="card vigilancia">
          <h3>Vigilância Inteligente com IA</h3>
          <p>
            Nossas câmeras equipadas com Inteligência Artificial analisam continuamente o ambiente, detectando e alertando sobre comportamentos suspeitos em tempo real.
          </p>
          <div className="imagem-placeholder">📷</div>
          <button className="botao">Conheça Nossa Tecnologia</button>
        </div>
      </div>

      {/* Aplicativo TDG */}
      <div className="card aplicativo">
        <h3>Aplicativo TDG: Controle Total</h3>
        <p>Gerencie seu condomínio na palma da mão com nosso aplicativo exclusivo:</p>
        <ul>
          <li>✅ Acesso rápido e seguro via reconhecimento facial</li>
          <li>✅ Visualização remota em tempo real</li>
          <li>✅ Notificações sobre abertura de portas</li>
          <li>✅ Controle de visitantes e eventos importantes</li>
          <li>✅ Aprovação de visitantes com um toque</li>
        </ul>
        <button className="botao destaque">Experimente Grátis</button>
      </div>
    </section>
  );
};

export default Servicos;
