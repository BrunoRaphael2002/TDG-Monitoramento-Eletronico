import './style.css';
import Video from '../../assets/promo.mp4';
import { useState } from 'react';

const Banner = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="banner">
            {/* Vídeo de fundo */}
            <video className="banner-video" autoPlay muted loop>
                <source src={Video} type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
            </video>

        

            {/* Conteúdo do banner */}
            <div className="banner-text">
                <h4>+60 condomínios monitorados 24h</h4>
                <h1>Economize até 50% sem abrir mão da segurança</h1>
                <p>
                    Com tecnologia avançada e inteligência artificial, a TDG Portaria Virtual
                    proporciona até 50% de economia, atendimento e monitoramento 24h, e
                    soluções personalizadas que valorizam seu patrimônio.
                </p>
                <div className="banner-buttons">
                    <button className="banner-button">Venha nos conhecer</button>
                    <button className="banner-play-button" onClick={toggleModal}>
                         Veja como funciona
                    </button>
                </div>
            </div>

        

            {/* Modal do vídeo */}
            {showModal && (
                <div className="video-modal" onClick={toggleModal}>
                    <div className="video-container">
                        <video controls autoPlay>
                            <source src={Video} type="video/mp4" />
                            Seu navegador não suporta vídeos HTML5.
                        </video>
                        <button className="modal-close" onClick={toggleModal}>
                            ✖
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Banner;
