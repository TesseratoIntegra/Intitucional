FROM node:18-alpine

# Diretório de trabalho
WORKDIR /app

# Copiar pacotes e instalar dependências
COPY package.json package-lock.json* ./
RUN npm install

# Copiar o restante do projeto
COPY . .

# Build do Next.js
RUN npm run build

# Expõe a porta padrão
EXPOSE 3000

# Comando de start
CMD ["npm", "start"]
