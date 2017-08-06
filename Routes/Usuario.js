module.exports = (app) => {

    var controller = require('../Usuario/UsuarioController')(app);
    app.get('/api/usuario/', controller.getAll);
    app.get('/api/usuario/:Id', controller.get);
    app.post('/api/usuario/', controller.post);
    app.put('/api/usuario/', controller.put);
    app.put('/api/usuario/senha/', controller.putSenha);

    //usuario bloqueado
    var controllerBloqueado = require('../Usuario/UsuarioBloqueado/UsuarioBloqueadoController')(app);
    app.get('/api/usuario/bloqueado/:Id', controllerBloqueado.getAll);
    app.post('/api/usuario/bloqueado/', controllerBloqueado.post);
    app.delete('/api/usuario/bloqueado/', controllerBloqueado.delete);

};