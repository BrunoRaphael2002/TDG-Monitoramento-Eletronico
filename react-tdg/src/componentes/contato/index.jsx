import { useState } from "react";
import "./index.css";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar via WhatsApp
    const mensagemWhatsApp = `Olá, meu nome é ${formData.nome}. 
    Email: ${formData.email}
    Telefone: ${formData.telefone}
    Mensagem: ${formData.mensagem}`;

    const telefoneWhatsApp = "558391298598" // Número do WhatsApp sem espaços e com código do país
    const urlWhatsApp = `https://wa.me/${telefoneWhatsApp}?text=${encodeURIComponent(
      mensagemWhatsApp
    )}`;

    window.open(urlWhatsApp, "_blank"); // Abre no WhatsApp
  };

  return (
    <section className="contato">
      <h2>Entre em Contato</h2>
      <div className="contato-container">
        {/* Formulário */}
        <form onSubmit={handleSubmit} className="contato-form">
          <h3>Fale Conosco</h3>
          <p>Descubra Como Podemos Revolucionar a Segurança do Seu Condomínio</p>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="telefone"
            placeholder="Telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
          <textarea
            name="mensagem"
            placeholder="Mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            required
          />
          <button type="submit">Enviar Mensagem</button>
        </form>

        {/* Informações de contato */}
        <div className="contato-info">
          <div>
            <h3 className="comercial">Comercial</h3>
            <p>📞 (83) 99334-7113</p>
            <p>✉️ atendimento@tdgmonitoramento.com.br</p>
          </div>
          <div>
            <h3 className="atendimento">Atendimento Geral</h3>
            <p>📞 (83) 3035-6166 / 99129-8598</p>
          </div>
          <div className="mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.2018837823384!2d-34.8395862!3d-7.102586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd13bbfe0057%3A0xe50d67e4edd414df!2sTDG%20Monitoramento!5e0!3m2!1spt-BR!2sbr!4v1738203452533!5m2!1spt-BR!2sbr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
