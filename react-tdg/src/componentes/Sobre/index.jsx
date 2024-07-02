
import PropTypes from 'prop-types';
import './style.css';

const Sobre = ({ image, subtitle, title, description, buttonText, buttonLink }) => {
    return (
        <div className="about-section">
            <img src={image} alt={title} className="about-image" />
            <div className="about-content">

                <div className='content-text'>
                    <h3 className="about-subtitle">{subtitle}</h3>
                    <h2 className="about-title">{title}</h2>
               
                    <p className="about-description">{description}</p>
                </div>
                <a href={buttonLink} className="about-button">
                    {buttonText}
                </a>
            </div>
        </div>
    );
};

Sobre.propTypes = {
    image: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
};

export default Sobre;
