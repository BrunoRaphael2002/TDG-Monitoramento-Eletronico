import Header from './componentes/header'
import Banner from './componentes/Banner'
import './App.css'
import Footer from './componentes/footer'
import SobreEmpresa from './componentes/Sobre'
import SobreEquipe from './componentes/Equipe'
import Vantagens from './componentes/vantagens'
import Contato from './componentes/contato'
import FAQ from './componentes/faq'
import Metricas from './componentes/metricas'
import Servicos from './componentes/servicos'






function App() {
 
  return (
    <>
     <Header/>
     <Banner/>
     <Metricas/>
     <Vantagens/>
     <SobreEmpresa/>
   <SobreEquipe/>
   <Servicos/>
   <Contato/>
   <FAQ/>
    <Footer/>
    </>
  )
}

export default App
