module.exports = (app) => {
   
    var controller = require('../Evento/EventoController.js')(app);
    var controllerComentario = require('../Evento/Comentario/ComentarioController')(app);
    app.get('/api/evento/:IdUsuario', controller.get);
    app.post('/api/evento/', controller.post);
    app.put('/api/evento/', controller.put);
    app.delete('/api/evento/:Id', controller.delete);

    //Comentario
    app.post('/api/evento/comentario/', controllerComentario.post);
    app.put('/api/evento/comentario/', controllerComentario.put);
    app.delete('/api/evento/comentario/:Id', controllerComentario.delete);
};