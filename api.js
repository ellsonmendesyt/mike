const express = require('express')
const app = express()
require('./db/conexao')

const cors = require('cors')
app.use(cors())
app.use(express.json())


app.post('/criar', (req, res) => {
    const {nome, senha} = req.body

    console.log(nome, senha);

    res.status(200).json({success: true})
})


app.get('/', (req, res) => {
    res.status(200).json({success: true, data: ['mike','elson']})
})

app.listen(8080, () => {
    console.log("Ouvindo");
})