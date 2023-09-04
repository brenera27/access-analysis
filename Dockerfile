# Use uma imagem do Node.js como base
FROM node:20

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos necessários para o diretório de trabalho no contêiner
COPY package.json yarn.lock ./

# Instale as dependências da aplicação
RUN yarn install

# Copie o restante dos arquivos da aplicação para o diretório de trabalho no contêiner
COPY . .

# Exponha a porta na qual a aplicação irá escutar (substitua a porta pela porta correta da sua aplicação)
EXPOSE 3000

# Comando para iniciar a aplicação (substitua pelo comando correto para iniciar a sua aplicação)
CMD ["yarn ", "run", "start:dev"]
