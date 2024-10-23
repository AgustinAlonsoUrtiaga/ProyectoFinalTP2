# Usa una imagen base oficial de Node.js (v18 para compatibilidad con Tedious)
FROM node:18-alpine

# Instala Python3, make, g++, y las dependencias necesarias para ODBC
RUN apk add --no-cache python3 build-base unixodbc-dev

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto en el que correrá tu aplicación
EXPOSE 3000

# Define una variable de entorno para determinar si estás en desarrollo o producción
ENV NODE_ENV=development

# Comando por defecto para correr la aplicación
CMD ["npm", "start"]