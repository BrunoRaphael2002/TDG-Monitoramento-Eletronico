import './index.css';
import portaria from '../../../src/assets/tdgpromo.mp4';

const SobreEmpresa = () => {
    return (
        <section className="sobre-empresa">
            <div className="sobre-empresa-content">
                <h2>A TDG Portaria Virtual - Pioneiros em Segurança Inteligente</h2>
                <p>
                    Fundada em 2010, a TDG Portaria Virtual foi a primeira empresa a implantar o sistema de portaria virtual no Brasil, no Ed. Tríade, em João Pessoa.
                </p>
                <p>
                    Nossa central de monitoramento própria gerencia a entrada e saída de moradores, visitantes e prestadores de serviço com a mesma eficiência de um porteiro físico. Com tecnologia de ponta e monitoramento em tempo real, garantimos a melhor proteção para o seu condomínio, oferecendo soluções personalizadas que atendem às suas necessidades.
                </p>
            </div>
            <div className="sobre-empresa-video">
                <h2>Veja como funciona</h2>
                <video controls className='video-promo'>
                    <source src={portaria} type="video/mp4" />          
                </video>
            </div>
        </section>
    );
};

export default SobreEmpresa;
