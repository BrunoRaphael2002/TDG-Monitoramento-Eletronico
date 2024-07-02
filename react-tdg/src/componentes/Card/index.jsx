import PropTypes from 'prop-types';
import './style.css';



const Card = ({ image, subtitle, title, description, link }) => {
    return (
        <>


        <div className="card">
           
            <div className="card-content">
            <img src={image} alt={title} className="card-image" />
                <h3 className="card-subtitle">{subtitle}</h3>
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <a href={link} className="card-link">
                    Saiba mais &rarr;
                </a>
            </div>
        </div>

        </>
    );
};

Card.propTypes = {
    image: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Card;
