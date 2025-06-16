import './Sobre.css';

const Sobre = () => {
  return (
    <div className="sobre">
      <div className="container">
        <div className="page-header">
          <h1>Sobre Nós</h1>
          <p>Conheça nossa história, missão e os valores que nos guiam na criação de soluções inovadoras</p>
        </div>

        <div className="content-section">
          <h2>Nossa Missão</h2>
          <p>
            Acreditamos que um ERP sozinho não basta para impulsionar verdadeiramente uma operação. 
            Nossa missão é desenvolver ferramentas inteligentes e microserviços que trabalham em 
            perfeita harmonia com seu sistema principal, potencializando cada aspecto do seu negócio.
          </p>
          <p>
            Com anos de experiência no desenvolvimento de soluções corporativas, nossa equipe 
            especializada entende as complexidades e desafios únicos que cada empresa enfrenta. 
            Por isso, criamos soluções sob medida que se adaptam perfeitamente às suas necessidades específicas.
          </p>
        </div>

        <div className="content-section">
          <h2>Nossa Abordagem</h2>
          <p>
            Trabalhamos com uma metodologia ágil e colaborativa, sempre priorizando a integração 
            simples e segura com seus sistemas existentes. Cada projeto é tratado como único, 
            com soluções personalizadas que realmente fazem a diferença no dia a dia da sua empresa.
          </p>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🎯</div>
            <h3>Foco no Cliente</h3>
            <p>Cada solução é desenvolvida pensando nas necessidades específicas e objetivos únicos de cada cliente.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">🔧</div>
            <h3>Excelência Técnica</h3>
            <p>Utilizamos as melhores práticas e tecnologias mais modernas para garantir soluções robustas e escaláveis.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Parceria</h3>
            <p>Não somos apenas fornecedores, somos parceiros estratégicos no crescimento e sucesso do seu negócio.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">🚀</div>
            <h3>Inovação</h3>
            <p>Estamos sempre buscando novas formas de otimizar processos e criar soluções que antecipem as necessidades futuras.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">🛡️</div>
            <h3>Segurança</h3>
            <p>Todas as nossas soluções são desenvolvidas com os mais altos padrões de segurança e proteção de dados.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">⚡</div>
            <h3>Agilidade</h3>
            <p>Entregamos soluções rapidamente sem comprometer a qualidade, permitindo que você veja resultados em pouco tempo.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;

