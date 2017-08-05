module.exports = (app) => {
   
    var controller = require('../Publicacao/PublicacaoController.js')(app);
    var controllerComentario = require('../Publicacao/Comentario/ComentarioController')(app);
    app.get('/api/timeline/publicacao/:IdUsuario', controller.get);
    app.post('/api/timeline/publicacao/', controller.post);
    app.put('/api/timeline/publicacao/', controller.put);
    app.delete('/api/timeline/publicacao/:Id', controller.delete);

    //Comentario
    app.post('/api/timeline/publicacao/comentario/', controllerComentario.post);
    app.put('/api/timeline/publicacao/comentario/', controllerComentario.put);
    app.delete('/api/timeline/publicacao/comentario/:Id', controllerComentario.delete);
};