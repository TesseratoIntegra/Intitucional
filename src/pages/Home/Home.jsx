import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>Sua empresa precisa mais do que um ERP: ferramentas que impulsionam sua operação</h1>
          <p className="subtitle">
            Acreditamos que um ERP sozinho não basta. Por isso, desenvolvemos ferramentas inteligentes que trabalham ao lado do seu sistema principal.
          </p>
          <Link to="/contato" className="cta-button">
            Fale Conosco
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Nossas Soluções</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon">📊</div>
              <h3>Dashboards e painéis interativos</h3>
              <p>Para decisões mais rápidas com visualizações em tempo real dos seus dados mais importantes.</p>
            </div>
            <div className="feature-card">
              <div className="icon">📱</div>
              <h3>Apps de campo</h3>
              <p>Para captura de dados em tempo real, permitindo que sua equipe trabalhe de qualquer lugar.</p>
            </div>
            <div className="feature-card">
              <div className="icon">🎯</div>
              <h3>Interfaces personalizadas</h3>
              <p>Para áreas como vendas e logística, otimizando processos específicos do seu negócio.</p>
            </div>
            <div className="feature-card">
              <div className="icon">📈</div>
              <h3>Relatórios e insights</h3>
              <p>Conectados direto ao ERP, fornecendo análises profundas para tomada de decisão estratégica.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="content">
            <div className="text-content">
              <h2>Integração Simples e Segura</h2>
              <p>
                Todas as nossas soluções são desenvolvidas com integração simples, segura e sob medida para o seu negócio.
              </p>
              <p>
                Nossa equipe especializada trabalha para entender suas necessidades específicas e criar ferramentas que realmente fazem a diferença no dia a dia da sua empresa.
              </p>
              <p>
                Com anos de experiência em desenvolvimento de microserviços e integração com sistemas ERP, garantimos soluções robustas e confiáveis.
              </p>
            </div>
            <div className="image-placeholder">
              Imagem ilustrativa da integração
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

