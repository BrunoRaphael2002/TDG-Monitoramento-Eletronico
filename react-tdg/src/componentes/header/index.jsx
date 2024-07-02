import Logo from './../../assets/logo.png'
import './style.css'

export default function Header() {
  return (
    <>
    <header>
    <img src={Logo} alt="Logo da Empresa" className="logo"/>
    <div className="container">
    
   
            <nav>
           
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#servico">Serviço</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
               
               
            </nav>
         
            <a href="tel:+5511999999999" className="call-button">5511999999999</a>
        </div>
       
        </header>
        </>
  
  )
}
