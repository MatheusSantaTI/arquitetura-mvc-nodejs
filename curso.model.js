// cursos.model.js

// Simulando os dados em memória
let cursos = [
    { id: 1, nome: 'Técnico em Informática', duracao: 1200, descricao: 'Curso de TI' },
    { id: 2, nome: 'Técnico em Enfermagem', duracao: 1600, descricao: 'Curso focado na área da saúde' }
];

// Exportando funções do model (CRUD)
module.exports = {
    // READ - Listar todos os cursos
    listar: function () {
        return cursos;
    },

    // READ - Buscar curso por ID
    buscarPorId: function (id) {
        return cursos.find(curso => curso.id === id);
    },

    // CREATE - Adicionar novo curso
    criar: function (curso) {
        const novoId = cursos.length > 0 ? cursos[cursos.length - 1].id + 1 : 1;
        const novoCurso = { id: novoId, ...curso };
        cursos.push(novoCurso);
        return novoCurso;
    },

    // UPDATE - Atualizar um curso por ID
    atualizar: function (id, novosDados) {
        const index = cursos.findIndex(curso => curso.id === id);
        if (index !== -1) {
            cursos[index] = { id, ...novosDados };
            return cursos[index];
        }
        return null;
    },

    // DELETE - Remover um curso por ID
    deletar: function (id) {
        const index = cursos.findIndex(curso => curso.id === id);
        if (index !== -1) {
            const cursoRemovido = cursos.splice(index, 1);
            return cursoRemovido[0];
        }
        return null;
    }
};

const cursoModel = require('../models/curso.model');

function listar(req, res) {
  const cursos = cursoModel.listarCursos();
  res.status(200).json(cursos);
}

module.exports = { listar };

 