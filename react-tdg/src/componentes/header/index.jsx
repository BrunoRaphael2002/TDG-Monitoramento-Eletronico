import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './../../assets/logo.png';
import './header.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    // Fechar o dropdown ao clicar fora dele
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header>
            <img src={Logo} alt="Logo da Empresa" className="logo" />
            <div className="container">
                <nav>
                    <ul className={isMenuOpen ? "active" : ""}>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="#">empresa</a></li>

                        {/* MENU DROPDOWN */}
                     { /*  <li 
                            className="dropdown" 
                            onClick={toggleDropdown} 
                            ref={dropdownRef}
                        >
                            <span>Sobre o Aplicativo ▼</span>
                            <ul className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
                                <li><Link to="/morador">Para Moradores</Link></li>
                                <li><Link to="/sindico">Para Síndicos</Link></li>
                            </ul>
                        </li>*/}

                        <li><a href="#">Contato</a></li>
                        <li><a  href="https://wa.me/558391298598?text=Ol%C3%A1%20vim%20pelo%20site%20da%20Tdg%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"  target="_blank" rel="noopener noreferrer" className="call-button">Solicite um orçamento</a></li>
                    </ul>
                </nav>

                {/* MENU HAMBURGUER */}
                <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </header>
    );
}
