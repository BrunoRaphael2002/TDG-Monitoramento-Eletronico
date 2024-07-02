
import './style.css';
import PropTypes from 'prop-types';

const ProfessionalCard = ({ name, position, description, imageUrl }) => {
  return (
    <div className="professional-card">
      <img src={imageUrl} alt={`${name}'s profile`} className="professional-card__image" />
      <div className="professional-card__info">
        <h3 className="professional-card__name">{name}</h3>
        <p className="professional-card__position">{position}</p>
        <p className="professional-card__description">{description}</p>
      </div>
    </div>
  );
};

ProfessionalCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ProfessionalCard;
