# Descargar la imagen que queremos utilizar
FROM node:22

LABEL developer = 'Danilo'

# Establecer la carpeta de trabajo en la imagen
WORKDIR /app

# Copiar los ficheros con la información de las dependencias
COPY package*.json ./
# COPY package-lock.json al poner el * en el anterior vale para esta instruccion tambien

# Obtener los módulos
RUN npm install

# Copiar el proyecto
COPY . .

# Arrancar la aplicación
CMD ["npm", "start"]
