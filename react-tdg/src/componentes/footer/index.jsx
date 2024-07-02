
import './style.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
        
        </a>
        <a href="https://www.twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
        
        </a>
        <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
       
        </a>
        <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
        
        </a>
      </div>
      <div className="navigation-links">
        <a href="/home">Home</a>
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
