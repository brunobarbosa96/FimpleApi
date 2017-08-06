module.exports = (app) => {
   
    var controller = require('../Chat/ChatController')(app);
    app.get('/api/chat/conversa/:Id', controller.getConversas);
    app.get('/api/chat/:Id', controller.get);
    app.post('/api/chat/', controller.post);
    app.put('/api/chat/', controller.put);
    app.delete('/api/chat/:Id', controller.delete);
};