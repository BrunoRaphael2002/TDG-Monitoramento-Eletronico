import './style.css';
import Video from '../../assets/promo.mp4';
// import Thumbnail from '../../assets/thumb.png'; // Thumbnail comentada
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
            <div className="banner-content">
                <div className="banner-text">
                    <h4>+50 condomínios monitorados 24h</h4>
                    <h1>
                        Somos os Pioneiros em Portaria Virtual trazendo Inovação, Segurança 24h, e <span className='destaque'>economia de até 70%</span> para Seu Condomínio
                    </h1>
                   {/* <p>
                        Economize até 70% em custos operacionais sem abrir mão da segurança de qualidade! Com
                        tecnologia de ponta e inteligência artificial, a TDG Portaria Virtual oferece monitoramento
                        contínuo, soluções sob medida e atendimento de excelência, proporcionando mais segurança e
                        economia para o seu condomínio.
                    </p>*/}
                    <div className="banner-buttons">
                        <button className="banner-button">Solicite um orçamento</button>
                        <button className="video-button" onClick={toggleModal}>🎥 Assista ao vídeo</button>
                    </div>
                </div>

                {/* Thumbnail comentada */}
                {/*
                <div className="video-thumbnail" onClick={toggleModal}>
                    <img src={Thumbnail} alt="Thumbnail do vídeo" />
                </div>
                */}
            </div>

            {/* Modal do vídeo */}
            {showModal && (
                <div className="video-modal" onClick={toggleModal}>
                    <div className="video-container" onClick={(e) => e.stopPropagation()}>
                        <video controls autoPlay className='video-banner'>
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
