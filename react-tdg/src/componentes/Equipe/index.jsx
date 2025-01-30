/*import EquipeImage from '../../assets/thumb.png'; // Substitua pelo caminho correto da imagem */
import './index.css';
import equipe from '../../../src/assets/equipe.jpeg'


const SobreEquipe = () => {
    return (
        <div className="sobre-container">
            <section className="sobre-equipe">
                <div className="sobre-equipe-image">
                    <img src={equipe} alt="Equipe de monitoramento da TDG Portaria Virtual em ação" />
                </div>
                <div className="sobre-equipe-content">
                    <h2>Equipe de Monitoramento - Profissionais Altamente Qualificados</h2>
                    <p>
                        Nossos monitoradores são capacitados e atuam em um ambiente controlado dentro de nossa central. Garantimos total precisão no controle de entradas e saídas, além de detectar e solucionar incidentes imediatamente.
                    </p>
                    <p>
                        Nosso compromisso é assegurar a proteção do seu patrimônio e a tranquilidade dos moradores.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default SobreEquipe;