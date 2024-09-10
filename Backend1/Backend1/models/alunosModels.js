module.exports = {
    getByIdAlunos,

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

function getByIdAlunos(p_codigo, retorno){
    console.log("Pesquisando o aluno" + p_codigo + "no Vetor de Alunos!");
    retorno = alunos.filter((aluno) => aluno.id == p_codigo)
    console.log("Retorno da Model Alunos: ", retorno)

}