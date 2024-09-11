const express = require('express');
const app = express();

const aluno = require('./api/routes/alunosRoutes');
const index = require('./api/routes/indexRoutes');

app.use(express.json())

app.set('views', './api/views');
app.set('view engine', 'ejs');

// Configurar diretório estático
app.use('static', express.static(__dirname + '/public'));
app.use(express.static('public'));
app.use(express.static('estilos'));
app.use(express.static('imagens'));
app.use(express.static('js'));

const port = 3000;

app.use('/aluno', aluno);
app.use("/", index);

//servidor rodando
app.listen(port, () => {
    console.log(`Aplicativo Rodando na Porta ${port}`);
})

module.exports = app;