import { useState } from 'react';
import './index.css'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'O que é o Sistema de Manutenção Predial?',
      answer: 'É uma plataforma projetada para ajudar síndicos a gerenciar manutenções, organizar tarefas e enviar notificações automáticas.',
    },
    {
      question: 'Como posso acessar o sistema?',
      answer: 'Você pode acessar o sistema através do nosso site ou aplicativo disponível para dispositivos móveis.',
    },
    {
      question: 'Quais são os planos disponíveis?',
      answer: 'Oferecemos planos mensais com funcionalidades variadas, além de um suporte personalizado para cada cliente.',
    },
    {
      question: 'O sistema envia notificações automáticas?',
      answer: 'Sim! Você pode configurar notificações automáticas para lembrar sobre manutenções programadas.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-heading">Perguntas Frequentes</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="toggle">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && <p className="answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
