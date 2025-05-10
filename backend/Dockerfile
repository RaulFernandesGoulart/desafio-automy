# Dockerfile para o backend Node.js

# Imagem oficial do Node.js
FROM node:18

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos
COPY . .

# Expõe a porta usada pelo servidor
EXPOSE 3001

# Comando para iniciar o servidor
CMD ["node", "server.js"]
