module.exports = (app) => {
   
    var controller = require('../Curso/CursoController')(app);
    app.get('/api/curso/', controller.getAll);

};