// Cargar los módulos (agregamos el type:modules para utilizar la nueva sintaxis)
import express from 'express'
import morgan from 'morgan'

// La constante que lanza la aplicación
const app = express()
// Crear la variable para el puerto
const PORT = 3000

// Cargar morgan
app.use(morgan('dev'))

// Indicar la carpeta de los ficheros estáticos
app.use(express.static('public'))

// En la ruta raiz se abrira el juego
app.get('/', (req, res) => {
    res.render('index')
    res.sendFile('index.html')
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

