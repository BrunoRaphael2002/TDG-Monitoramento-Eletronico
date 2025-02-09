import './index.css';
import portaria from '../../../src/assets/tdgpromo.mp4';

const ComoFunciona = () => {
    return (
        <section className="sobre-empresa">
            <div className="sobre-empresa-content">
                <h2>Veja como funciona</h2>
                <p>Assista o vídeo ao lado e veja como funciona</p>
            </div>
            <div className="sobre-empresa-video">
                <video controls className="video-promo">
                    <source src={portaria} type="video/mp4" />
                </video>
            </div>
        </section>
    );
};

export default ComoFunciona;
