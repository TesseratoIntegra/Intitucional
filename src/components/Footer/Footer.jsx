import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Tesserato Integra</h3>
            <p>Desenvolvemos ferramentas inteligentes que trabalham ao lado do seu sistema principal, impulsionando sua operação com soluções sob medida.</p>
          </div>
          <div className="footer-section">
            <h3>Serviços</h3>
            <a href="/servicos">Dashboards Interativos</a>
            <a href="/servicos">Apps de Campo</a>
            <a href="/servicos">Interfaces Personalizadas</a>
            <a href="/servicos">Relatórios e Insights</a>
          </div>
          <div className="footer-section">
            <h3>Contato</h3>
            <p>Email: tesseratointegra@gmail.com</p>
            <p>Telefone: (16) 99241-6689</p>
            <p>Endereço: Santa Rosa de Viterbo, SP</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 TesseratoIntegra. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

