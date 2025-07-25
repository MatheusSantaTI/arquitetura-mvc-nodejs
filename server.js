const express = require('express');
const app = express();

const alunoRoutes = require('./routes/aluno.routes');
const professorRoutes = require('./routes/professor.routes');

app.use(express.json());

app.use('/alunos', alunoRoutes);
app.use('/professores', professorRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
