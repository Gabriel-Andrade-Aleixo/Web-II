module.exports = {
    getByIdAlunos,

}


const alunos = require("../dados.json");
console.log(alunos);

function getByIdAlunos(p_codigo, retorno){
    console.log("Pesquisando o aluno" + p_codigo + "no Vetor de Alunos!");
    retorno = alunos.filter((aluno) => aluno.id == p_codigo)
    console.log("Retorno da Model Alunos: ", retorno)

}