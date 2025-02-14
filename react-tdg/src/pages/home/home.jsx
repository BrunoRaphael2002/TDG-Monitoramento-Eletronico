import Header from '../../componentes/header'
import Banner from '../../componentes/Banner'
import Footer from '../../componentes/footer'
/*import SobreEmpresa from '../../componentes/Sobre'*/
import Vantagens from '../../componentes/vantagens'
import Contato from '../../componentes/contato'
import FAQ from '../../componentes/faq'
import Metricas from '../../componentes/metricas'
import ComoFunciona from '../../componentes/como-funciona'


function Home() {
 
    return (
      <>
       <Header/>
       <Banner/>
       <Metricas/>
       <ComoFunciona/>
       <Vantagens/>
     <Contato/>
     <FAQ/>
      <Footer/>
      </>
    )
  }
  
  export default Home