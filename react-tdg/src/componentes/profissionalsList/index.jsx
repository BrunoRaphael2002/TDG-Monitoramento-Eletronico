
import ProfessionalCard from '../profissionais';
import  {professionals} from '../../Data/Dataprofissionais';

const ProfessionalsList = () => {
  return (
    <>

<div className='titulo'>
          <h3 >Serviços</h3>
                <h1>Conheça nossos colaboradores</h1>
        </div>
    <div className="professionals-list">
      {professionals.map(professional => (
        <ProfessionalCard
          key={professional.id}
          name={professional.name}
          position={professional.position}
          description={professional.description}
          imageUrl={professional.imageUrl}
        />
      ))}
    </div>
    </>
  );
};

export default ProfessionalsList;
