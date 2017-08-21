module.exports = (app) => {

    var repository = require('./PublicacaoRepository')(app);
    var notificacaoRepository = require('../Notificacao/NotificacaoRepository')(app);
    var comentarioRepository = require('./Comentario/ComentarioRepository')(app);
    var service = {

        delete: (req, res, callback) => {
            notificacaoRepository.deleteByPublicacao(req, res);
            comentarioRepository.deleteByPublicacao(req, res);
            repository.delete(req, res, (err, row) => {
                if (err)
                    return callback(err);
            });
        }
    }

    return service;
};  