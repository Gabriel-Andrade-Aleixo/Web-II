const express = require('express');

const router = express.Router();

const controllerAlunos = require("../controllers/alunosControllers");

router.get("/",controllerAlunos.getAll);
router.get('/edit', controllerAlunos.getEdit);
router.get('/delete',controllerAlunos.getDelete);
router.get('/sobre',controllerAlunos.getSobre);
router.get("/:cod", controllerAlunos.getCod);
router.get("/editar/:cod", controllerAlunos.getId);











router.get("*", function (req, res) {
    //console.log('Página não Encontrada - 404');
    res.send('<h3>Página Não Encontrada!</h3><p> Erro 404</p>')
})

module.exports = router


