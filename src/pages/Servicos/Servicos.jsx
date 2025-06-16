import './Servicos.css';

const Servicos = () => {
  return (
    <div className="servicos">
      <div className="container">
        <div className="page-header">
          <h1>Nossos Serviços</h1>
          <p>Soluções completas para potencializar seu ERP e otimizar seus processos de negócio</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3>Dashboards Interativos</h3>
            <p>Painéis de controle personalizados que transformam dados complexos em insights visuais claros e acionáveis.</p>
            <ul className="features-list">
              <li>Visualizações em tempo real</li>
              <li>Métricas personalizáveis</li>
              <li>Alertas automáticos</li>
              <li>Exportação de relatórios</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>Apps de Campo</h3>
            <p>Aplicações móveis que permitem captura e sincronização de dados em tempo real, mesmo offline.</p>
            <ul className="features-list">
              <li>Funcionamento offline</li>
              <li>Sincronização automática</li>
              <li>Interface intuitiva</li>
              <li>Captura de fotos e assinaturas</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">🎯</div>
            <h3>Interfaces Personalizadas</h3>
            <p>Desenvolvimento de interfaces específicas para diferentes departamentos, otimizando fluxos de trabalho únicos.</p>
            <ul className="features-list">
              <li>Design sob medida</li>
              <li>Integração com ERP</li>
              <li>Workflows automatizados</li>
              <li>Controle de permissões</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">📈</div>
            <h3>Relatórios e Insights</h3>
            <p>Análises avançadas e relatórios inteligentes conectados diretamente aos dados do seu ERP.</p>
            <ul className="features-list">
              <li>Análise preditiva</li>
              <li>Relatórios automatizados</li>
              <li>Business Intelligence</li>
              <li>Indicadores de performance</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">🔗</div>
            <h3>Integração de Sistemas</h3>
            <p>Conectamos diferentes sistemas e plataformas para criar um ecossistema tecnológico unificado.</p>
            <ul className="features-list">
              <li>APIs robustas</li>
              <li>Sincronização de dados</li>
              <li>Middleware personalizado</li>
              <li>Monitoramento contínuo</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">🛡️</div>
            <h3>Consultoria Técnica</h3>
            <p>Orientação especializada para otimização de processos e implementação de melhores práticas.</p>
            <ul className="features-list">
              <li>Análise de processos</li>
              <li>Arquitetura de soluções</li>
              <li>Treinamento de equipes</li>
              <li>Suporte contínuo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicos;

