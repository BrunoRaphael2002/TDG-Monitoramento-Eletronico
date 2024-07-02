
import TestimonialCard from './index';
import perfil from '../../assets/perfil.jpeg'
import './style.css'

const testimonials = [
  {
    id: 1,
    image: perfil,
    title: 'Alice Johnson',
    subtitle: 'Marketing Specialist',
    description: 'This company provided excellent services. Highly recommended!'
  },
  {
    id: 2,
    image: perfil,
    title: 'Bob Smith',
    subtitle: 'Software Engineer',
    description: 'Amazing experience. The team is very professional.'
  },
  {
    id: 3,
    image: perfil,
    title: 'Clara Williams',
    subtitle: 'Product Manager',
    description: 'Outstanding customer service and attention to detail.'
  }
];

const TestimonialsList = () => {
  return (
   <>
       <div className='titulo'>
          <h3 >Depoimentos</h3>
                <h1>O que os Clientes dizem</h1>
        </div>

   <div className="testimonials-list">
 
      {testimonials.map(testimonial => (
        <TestimonialCard
          key={testimonial.id}
          image={testimonial.image}
          title={testimonial.title}
          subtitle={testimonial.subtitle}
          description={testimonial.description}
        />
      ))}
    </div>
    </>
  );
};

export default TestimonialsList;
