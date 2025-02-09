import Footer from "../../componentes/footer";
import Header from "../../componentes/header";
import "./morador.css"; // Novo arquivo de estilos

const AppMorador = () => {
  return (
    <>
      <Header />
      <div className="morador-container">
        <section className="morador-hero">
          <h1>📱 APP DO MORADOR</h1>
          <h2>Ferramenta aliada de todos os moradores.</h2>
          <div className="placeholder-image hero-placeholder"></div>
          <p>
            O App do Morador foi desenvolvido para ser intuitivo e útil, oferecendo funcionalidades personalizadas para cada condomínio.
          </p>
        </section>
        
        {/* Seção de Recursos */}
        <section className="morador-recursos">
          <h2>🚀 Destaques</h2>
          <div className="recursos-grid">
            <ul>
              <li>🎨 <strong>Aplicativo White Label:</strong> Personalizado com a identidade visual do condomínio.</li>
              <li>🏢 <strong>Multi-condomínios:</strong> Gerencie diversas unidades no mesmo app.</li>
              <li>📅 <strong>Reservas de Espaços:</strong> Agendamento fácil de áreas comuns.</li>
              <li>📌 <strong>Mural de Recados:</strong> Comunicação entre moradores e administração.</li>
              <li>📄 <strong>Documentos:</strong> Acesso rápido a regulamentos e atas.</li>
            </ul>
            <ul>
              <li>⚠️ <strong>Ocorrências:</strong> Registro e acompanhamento de problemas.</li>
              <li>💬 <strong>Mensagens:</strong> Contato direto com a administração.</li>
              <li>🎥 <strong>Visualização de Câmeras:</strong> Monitoramento em tempo real.</li>
              <li>🔑 <strong>Chave Mobile:</strong> Abertura de portões pelo smartphone.</li>
              <li>✅ <strong>Autorização pelo APP:</strong> Controle de visitantes.</li>
            </ul>
          </div>
        </section>

        {/* Seção de Apresentação */}
        <section className="morador-apresentacao">
          <button className="morador-button">🔎 Quer conhecer mais vantagens? Agende uma apresentação.</button>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AppMorador;
