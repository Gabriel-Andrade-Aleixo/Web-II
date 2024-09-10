const alunosModels = require("../models/alunosModels");

module.exports = {
getEdit,
getDelete,
getSobre,
getAll,
getCod,
getId,
}

const alunos =  
[
        {
            id: 1,
            nome: 'Fulano Silva',
            idade: 27
        },
        {
            id: 2,
            nome: 'Ciclano Almeida',
            idade: 32
        },
        {
            id: 7,
            nome: 'José de Assis',
            idade: 97
        }

]


function getAll(req, res) {
    console.log("Lendo alunos...\n",alunos)
    return res.json(alunos)
};

/// rota de edição de alunos
function getEdit(req,res) {
    console.log('Editando o aluno: ');    
    res.send('<h3> Rota de Edição de Alunos  </h3>');
}

/// rota de exclusão de alunos
function getDelete(req,res) {
    console.log('Excluindo o aluno: ');    
    res.send('<h3> Rota de Exclusão de Alunos  </h3>');
};

// rota sobre
function getSobre(req,res) {
    console.log('Rota Sobre Encontrada!!!');
    res.send('<h3> Rota Sobre Encontrada! <br> Saiba Mais Sobre a Nossa Empresa </h3>');
};


function getCod(req,res) {
    let codigo = req.params.cod;
    console.log('Localizado o aluno: ',alunos[codigo]);    
    return res.json(alunos[codigo]);
};


function getId(req, res) {
    let p_codigo = req.params.cod;
    console.log("Código do aluno recebido: ", p_codigo);
    alunosModels.getByIdAlunos(p_codigo)
    res.send("Retorno da Model!!!");

}

