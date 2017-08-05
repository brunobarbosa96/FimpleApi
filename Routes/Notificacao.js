module.exports = (app) => {
   
    var controller = require('../Notificacao/NotificacaoController')(app);
    app.get('/api/notificacao/:IdUsuario', controller.get);
    app.post('/api/notificacao/', controller.post);
    app.put('/api/notificacao/', controller.put);
    app.delete('/api/notificacao/:Id', controller.delete);
};