
import PropTypes from 'prop-types';
import './style.css';

const TestimonialCard = ({ image, title, subtitle, description }) => {
  return (
    <>
 
    <div className="testimonial-card">
      <img src={image} alt={`${title}'s testimonial`} className="testimonial-card__image" />
      <div className="testimonial-card__content">
        <h3 className="testimonial-card__title">{title}</h3>
        <h4 className="testimonial-card__subtitle">{subtitle}</h4>
        <p className="testimonial-card__description">{description}</p>
      </div>
    </div>
    </>
  );
};

TestimonialCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TestimonialCard;
