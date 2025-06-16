import { useState, useEffect } from 'react';
import './VideoManager.css';

const VideoManager = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploadData, setUploadData] = useState({
    title: '',
    description: '',
    file: null
  });

  const API_BASE_URL = 'https://ogh5izcv8m6k.manus.space/api';

  // Carregar vídeos ao montar o componente
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/videos`);
      const data = await response.json();
      
      if (data.success) {
        setVideos(data.videos);
      } else {
        console.error('Erro ao carregar vídeos:', data.error);
      }
    } catch (error) {
      console.error('Erro ao conectar com a API:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUploadData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setUploadData(prev => ({
      ...prev,
      file: e.target.files[0]
    }));
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    
    if (!uploadData.file) {
      alert('Por favor, selecione um arquivo de vídeo');
      return;
    }

    try {
      setLoading(true);
      
      const formData = new FormData();
      formData.append('video', uploadData.file);
      formData.append('title', uploadData.title);
      formData.append('description', uploadData.description);

      const response = await fetch(`${API_BASE_URL}/videos`, {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        alert('Vídeo enviado com sucesso!');
        setUploadData({ title: '', description: '', file: null });
        // Limpar o input de arquivo
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = '';
        // Recarregar lista de vídeos
        fetchVideos();
      } else {
        alert('Erro ao enviar vídeo: ' + data.error);
      }
    } catch (error) {
      console.error('Erro ao enviar vídeo:', error);
      alert('Erro ao conectar com o servidor');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (videoId) => {
    if (!confirm('Tem certeza que deseja deletar este vídeo?')) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/videos/${videoId}`, {
        method: 'DELETE'
      });

      const data = await response.json();

      if (data.success) {
        alert('Vídeo deletado com sucesso!');
        fetchVideos();
      } else {
        alert('Erro ao deletar vídeo: ' + data.error);
      }
    } catch (error) {
      console.error('Erro ao deletar vídeo:', error);
      alert('Erro ao conectar com o servidor');
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="video-manager">
      <div className="container">
        <h2>Gerenciador de Vídeos</h2>
        
        {/* Formulário de Upload */}
        <div className="upload-section">
          <h3>Enviar Novo Vídeo</h3>
          <form onSubmit={handleUpload} className="upload-form">
            <div className="form-group">
              <label htmlFor="title">Título</label>
              <input
                type="text"
                id="title"
                name="title"
                value={uploadData.title}
                onChange={handleInputChange}
                placeholder="Digite o título do vídeo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Descrição</label>
              <textarea
                id="description"
                name="description"
                value={uploadData.description}
                onChange={handleInputChange}
                placeholder="Digite uma descrição para o vídeo"
                rows="3"
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="video">Arquivo de Vídeo</label>
              <input
                type="file"
                id="video"
                accept="video/*"
                onChange={handleFileChange}
                required
              />
              <small>Formatos aceitos: MP4, AVI, MOV, WMV, FLV, WebM, MKV (máx. 100MB)</small>
            </div>

            <button type="submit" disabled={loading} className="upload-btn">
              {loading ? 'Enviando...' : 'Enviar Vídeo'}
            </button>
          </form>
        </div>

        {/* Lista de Vídeos */}
        <div className="videos-section">
          <h3>Vídeos Enviados</h3>
          {loading && <p>Carregando...</p>}
          
          {videos.length === 0 && !loading && (
            <p className="no-videos">Nenhum vídeo foi enviado ainda.</p>
          )}

          <div className="videos-grid">
            {videos.map(video => (
              <div key={video.id} className="video-card">
                <div className="video-info">
                  <h4>{video.title || video.original_filename}</h4>
                  {video.description && <p>{video.description}</p>}
                  <div className="video-meta">
                    <span>Arquivo: {video.original_filename}</span>
                    <span>Tamanho: {formatFileSize(video.file_size)}</span>
                    <span>Enviado em: {new Date(video.upload_date).toLocaleDateString('pt-BR')}</span>
                  </div>
                </div>
                
                <div className="video-actions">
                  <a 
                    href={`${API_BASE_URL}/videos/${video.id}/stream`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-btn"
                  >
                    Visualizar
                  </a>
                  <button 
                    onClick={() => handleDelete(video.id)}
                    className="delete-btn"
                  >
                    Deletar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoManager;

