import Footer from "../../componentes/footer";
import Header from "../../componentes/header";
import "./sindico.css"; // Novo arquivo de estilos

const SindicoPage = () => {
    return (
        <>
            <Header />
            <div className="sindico-container">
                <section className="sindico-hero">
                    <h1>🛠️ APP DO SÍNDICO</h1>
                    <h2>Praticidade na gestão da portaria</h2>
                    <div className="placeholder-image hero-placeholder"></div>
                    <p>
                        A gestão da portaria e o controle de acesso do condomínio nunca foram tão práticos para o síndico.
                    </p>
                </section>

                {/* Seção de Recursos */}
                <section className="sindico-recursos">
                    <h2>📌 Principais Recursos</h2>
                    <div className="recursos-grid">
                        <ul>
                            <li>🏢 <strong>Multi-condomínios:</strong> Ideal para síndicos que gerenciam vários condomínios.</li>
                            <li>📄 <strong>Documentos:</strong> Armazenamento seguro de regulamentos e atas.</li>
                            <li>⚠️ <strong>Ocorrências:</strong> Registro e acompanhamento de problemas.</li>
                            <li>📌 <strong>Mural de Recados:</strong> Comunicação direta com os moradores.</li>
                        </ul>
                        <ul>
                            <li>📅 <strong>Reserva de Espaços:</strong> Controle de áreas comuns.</li>
                            <li>📝 <strong>Painel de Controle:</strong> Lista de moradores e visitantes autorizados.</li>
                            <li>🎥 <strong>Visualização das Câmeras:</strong> Monitoramento em tempo real.</li>
                            <li>🔑 <strong>Chave Mobile:</strong> Abertura de portões via smartphone.</li>
                        </ul>
                    </div>
                </section>

                {/* Seção de Apresentação */}
                <section className="sindico-apresentacao">
                    <button className="sindico-button">📅 Agende uma apresentação</button>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default SindicoPage;
