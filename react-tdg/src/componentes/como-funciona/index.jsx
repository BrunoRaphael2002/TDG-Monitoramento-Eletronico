import './index.css';

const ComoFunciona = () => {
    return (
        <section className="sobre-empresa">
            <div className="sobre-empresa-content">
                <h2>Veja como funciona</h2>
                <p>Assista o vídeo ao lado e veja como funciona</p>
            </div>
            <div className="sobre-empresa-video">
                <iframe
                    className="video-promo"
                    src="https://www.youtube.com/embed/flqMla_n0Xw?si=hTdRCF8CQR2gdLci"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
};

export default ComoFunciona;
