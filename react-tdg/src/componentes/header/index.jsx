import Logo from './../../assets/logo.png';
import './style.css';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <img src={Logo} alt="Logo da Empresa" className="logo" />
            <div className="container">
                <nav>
                    <ul className={isMenuOpen ? "active" : ""}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#sobre">Como funciona</a></li>
                        <li><a href="#servico">Depoimentos</a></li>
                        <li><a href="#con">Contato</a></li>
                        <li><a href="tel:+5511999999999" className="call-button">Solicite um orçamento</a></li>
                    </ul>
                </nav>
                <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </header>
    );
}
