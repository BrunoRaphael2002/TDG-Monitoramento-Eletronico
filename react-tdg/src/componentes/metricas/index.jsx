import './index.css';
import { FaUsers, FaChartPie, FaClock, FaShieldAlt } from 'react-icons/fa';

const Metricas = () => {
    return (
        <section className="metricas">
            <div className="metricas-item">
                <FaUsers className="metricas-icon" />
                <h3>50+</h3>
                <p>Condomínios Monitorados</p>
            </div>
            <div className="metricas-item">
                <FaChartPie className="metricas-icon" />
                <h3>70%</h3>
                <p>Economia em Custos</p>
            </div>
            <div className="metricas-item">
                <FaClock className="metricas-icon" />
                <h3>24/7</h3>
                <p>Monitoramento</p>
            </div>
            <div className="metricas-item">
                <FaShieldAlt className="metricas-icon" />
                <h3>100%</h3>
                <p>Satisfação dos Clientes</p>
            </div>
        </section>
    );
};

export default Metricas;