import { useState } from 'react';
import './Contato.css';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    console.log('Dados do formulário:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      nome: '',
      email: '',
      empresa: '',
      telefone: '',
      mensagem: ''
    });
  };

  return (
    <div className="contato">
      <div className="container">
        <div className="page-header">
          <h1>Entre em Contato</h1>
          <p>Vamos conversar sobre como podemos impulsionar sua operação com nossas soluções personalizadas</p>
        </div>

        <div className="contact-content">
          <div className="contact-form">
            <h2>Envie sua Mensagem</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nome">Nome Completo</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="empresa">Empresa</label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefone">Telefone</label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-card">
              <h3>Informações de Contato</h3>
              <div className="info-item">
                <span className="icon">📧</span>
                <span>tesseratointegra@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="icon">📞</span>
                <span>(16) 99241-6689</span>
              </div>
              <div className="info-item">
                <span className="icon">📍</span>
                <span>Santa Rosa de Viterbo, SP - Brasil</span>
              </div>
              <div className="info-item">
                <span className="icon">🕒</span>
                <span>Seg - Sex: 9h às 18h</span>
              </div>
            </div>

            <div className="video-section">
              <h3>Conheça Nossas Soluções</h3>
              <div className="video-placeholder">
                Vídeo demonstrativo será carregado aqui
              </div>
              <p>
                Assista ao nosso vídeo demonstrativo e veja como nossas soluções podem 
                transformar a operação da sua empresa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;

