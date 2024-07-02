import Header from './componentes/header'
import Banner from './componentes/Banner'
import Card from './componentes/Card'
import InlineCard from './componentes/inlineCard'

import './App.css'
import imagem from './assets/CAM.png'
import imagemEx from './assets/empresa.jpg'
import Sobre from './componentes/Sobre'
import ProfessionalsList from './componentes/profissionalsList'
import Footer from './componentes/footer'
import TestimonialsList from './componentes/PS/testemunho'




function App() {
 
  return (
    <>
     <Header/>
     <Banner/>

     <div className='card-container' >
  
            <InlineCard 
                image={imagem}
                title="Título 1"
                description="Esta é a descrição do card 1."
            />
            <InlineCard 
                image={imagem}
                title="Título 2"
                description="Esta é a descrição do card 2."
            />
            <InlineCard 
                image={imagem}
                title="Título 3"
                description="Esta é a descrição do card 3."
            />
            {/* Adicione mais cards conforme necessário */}
        </div>


        <Sobre
                image={imagemEx}
                subtitle="Sobre nós"
                title="Bem-vindo à nossa empresa"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nesciunt quod velit aspernatur reiciendis voluptate! Dolorem veritatis repellat impedit dolor, sit molestias nam a cumque neque vitae, aspernatur ipsa architecto."
                buttonText="Saiba mais"
                buttonLink="#"
            />


   


    <div className='titulo'>
          <h3 >Serviços</h3>
                <h1>Conheça nossos serviços</h1>
        </div>
     <div className='boxcard' >

  
            <Card 
                image={imagem}
                subtitle="Subtítulo 1"
                title="Título 1"
                description="Esta é a descrição do card 1."
                link="#"
            />
            <Card 
                image={imagem}
                subtitle="Subtítulo 2"
                title="Título 2"
                description="Esta é a descrição do card 2."
                link="#"
            />
            <Card 
                image={imagem}
                subtitle="Subtítulo 3"
                title="Título 3"
                description="Esta é a descrição do card 3."
                link="#"
            />

</div>

    <ProfessionalsList/>
    
    <Banner/>
      
      <TestimonialsList/>

    <Footer/>
    </>
  )
}

export default App
