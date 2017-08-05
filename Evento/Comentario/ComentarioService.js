module.exports = (app) => {

    var repository = require('./ComentarioRepository')(app);
    var eventoRepository = require('../EventoRepository')(app);
    var notificacaoRepository = require('../../Notificacao/NotificacaoRepository')(app);
    var service = {

        post: (req, res, callback) => {

            eventoRepository.getById(req, res, (err, row) => {
                if (err)
                    return callback(err);

                repository.post(req, res, callback);

                if (row && row.Usuario.Id != req.body.Usuario.Id) {
                    req.body.Evento = { Id: req.body.Evento.Id, Usuario: { Id: row.Usuario.Id } };
                    notificacaoRepository.post(req, res, (error) => {
                        if (error) console.log(error);
                    });
                }
            });
        }

    };

    return service;
};