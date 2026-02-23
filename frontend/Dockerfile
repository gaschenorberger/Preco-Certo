# Usa uma imagem estável do Node.js
FROM node:20-alpine

# Define a pasta de trabalho dentro do container
WORKDIR /app

# Copia apenas os ficheiros de dependências primeiro (otimiza o cache)
COPY package*.json ./

# Instala as dependências (isso evita o erro de node_modules em falta)
RUN npm install

# Copia o resto do código do projeto
COPY . .

# Expõe a porta padrão do React
EXPOSE 3000

# Comando para iniciar o servidor de desenvolvimento
CMD ["npm", "start"]