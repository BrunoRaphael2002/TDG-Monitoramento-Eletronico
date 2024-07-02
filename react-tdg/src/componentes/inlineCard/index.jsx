
import PropTypes from 'prop-types';
import './style.css';

const InlineCard = ({ image, title, description }) => {
    return (

        <>
      

        <div className="inline-card">
            <img src={image} alt={title} className="inline-card-image" />
            <div className="inline-card-content">
                <h2 className="inline-card-title">{title}</h2>
                <p className="inline-card-description">{description}</p>
            </div>
        </div>
        </>
    );
};

InlineCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default InlineCard;
