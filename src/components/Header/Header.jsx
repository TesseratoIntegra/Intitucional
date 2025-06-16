import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/tesserato_integra_logo_original_color_enhanced (1).png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="Tesserato Integra"/>
        </Link>

        <nav className="nav">
          <Link to="/">Início</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/videos">Vídeos</Link>
        </nav>
        <button className="mobile-menu">
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;

