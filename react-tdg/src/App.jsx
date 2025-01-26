import Header from './componentes/header'
import Banner from './componentes/Banner'
import './App.css'
import Footer from './componentes/footer'
import SobreEmpresa from './componentes/Sobre'
import SobreEquipe from './componentes/Equipe'
import Vantagens from './componentes/vantagens'
import CameraComIA from './componentes/cameraIA'
import AppTdg from './componentes/AplicativoTDG'
import Depoimentos from './componentes/depoimentos'
import Contato from './componentes/contato'
import FAQ from './componentes/faq'






function App() {
 
  return (
    <>
     <Header/>
     <Banner/>
     <SobreEmpresa/>
   <SobreEquipe/>
   <Vantagens/>
   <CameraComIA/>
   <AppTdg/>
   <Depoimentos/>
   <Contato/>
   <FAQ/>
    <Footer/>
    </>
  )
}

export default App
