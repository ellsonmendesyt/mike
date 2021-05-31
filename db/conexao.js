const Sequelize = require('sequelize')

const seq = new Sequelize({
    dialect: 'sqlite',
    storage: './db/banco.db'
})


const Usuario  = seq.define('Usuario', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true
    },
    senha: {
        type: Sequelize.STRING(6),
        allowNull: false,
        required: true
    }
})

// Usuario.sync({force: true}).then(() => {
//     console.log("criou user no bd");
// })

//  Usuario.create({nome: 'admin', senha: 'admin'})

const obj = Usuario.findOne({where: {nome : 'admin'}}).then((res) => {
    console.log(res);
})



seq.authenticate().then(() => console.log("conectado"))


