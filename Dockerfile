# Etapa de construção
FROM node:18-alpine as build

# Defina o diretório de trabalho
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Execute o build da aplicação
RUN npm run build

# Etapa de execução
FROM node:18-alpine

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos de build da etapa anterior
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

# Copie também o package.json e o package-lock.json
COPY --from=build /app/package*.json ./

# Instale as dependências de produção
RUN npm install --only=production


# Exponha a porta 3000
EXPOSE 3000

# Comando para iniciar a aplicação Next.js
CMD ["npm", "start"]
