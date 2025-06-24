const Curso = require('../models/curso.model');

const cursoModel = require('./curso.model');
function listar(req, res) {
  // retorna a lista de cursos

   // chamar a funçao do model que lista os cursos
    const cursos = cursoModel.listarCursos();
    res.status(200).json(cursos);
    // retornar a resposta  para o cliente
    response.json(cursos);
}   
 module.exports = {
    listar,
 }