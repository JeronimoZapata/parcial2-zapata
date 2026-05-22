#Usa Node.js 22
FROM node:22-alpine

#Crea el directorio de la aplicación
WORKDIR /app

#Copia package.json y package-lock.json para instalar dependencias
COPY package*.json ./

#Instala las dependencias
RUN npm ci

#Copia src, test, tsconfig e index.html al contenedor
COPY tsconfig.json ./
COPY index.html ./
COPY src ./src
COPY test ./test

#Compila TypeScript al construir la imagen (hace la build de la aplicación)
RUN npm run build

#Corre tests y luego sirve el HTML
CMD ["sh", "-c", "npm test && npx http-server . -p 5173 -a 0.0.0.0"]