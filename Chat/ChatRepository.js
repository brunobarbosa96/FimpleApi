module.exports = (app) => {

    var mensagem = app.models.mensagem;
    var curso = app.models.curso;
    var repository = {

        getConversas: (req, res, callback) => {
            mensagem.find({
                or: [
                    { UsuarioEnvio: req.params.Id },
                    { UsuarioDestino: req.params.Id }
                ]
            }, { select: ["UsuarioEnvio", "UsuarioDestino"] })
                .populate("UsuarioEnvio", { select: ["Id", "Nome", "Curso"] })
                .populate("UsuarioDestino", { select: ["Id", "Nome", "Curso"] })
                .exec((err, row) => {
                    curso.find({ select: ['Id', 'Nome'] }).exec((error, cursos) => {
                        if (error)
                            return callback(error);

                        for (var i in row) {
                            row[i].UsuarioEnvio.Curso = cursos.filter((x) => x.Id == row[i].UsuarioEnvio.Curso)[0];
                            row[i].UsuarioDestino.Curso = cursos.filter((x) => x.Id == row[i].UsuarioDestino.Curso)[0];
                        }

                        var conversas = [];
                        for (var i in row)
                            if (!conversas.filter((x) => (x.UsuarioDestino.Id == row[i].UsuarioDestino.Id
                                    && x.UsuarioEnvio.Id == row[i].UsuarioEnvio.Id)
                                || (x.UsuarioDestino.Id == row[i].UsuarioEnvio.Id
                                    && x.UsuarioEnvio.Id == row[i].UsuarioDestino.Id)).length)
                                conversas.push(row[i]);

                        return callback(err, conversas);
                    });
                });
        },

        get: (req, res, callback) => {
            mensagem.find({
                or: [
                    { UsuarioEnvio: req.params.Id, UsuarioDestino: req.query.UsuarioDestino },
                    { UsuarioEnvio: req.query.UsuarioDestino, UsuarioDestino: req.params.Id }
                ]
            })
                .paginate({ page: req.query.Pagina, limit: 25 })
                .populate("UsuarioEnvio", { select: ["Id", "Nome"] })
                .populate("UsuarioDestino", { select: ["Id", "Nome"] })
                .exec((err, row) => {
                    return callback(err, row);
                });
        },

        post: (req, res, callback) => {
            mensagem.create({
                Conteudo: req.body.Conteudo,
                DataEnvio: new Date(),
                UsuarioEnvio: req.body.UsuarioEnvio.Id,
                UsuarioDestino: req.body.UsuarioDestino.Id,
                DataRecebimento: req.body.DataRecebimento
            }).exec((err, row) => {
                return callback(err, row);
            });
        },

        put: (req, res, callback) => {
            mensagem.update({
                UsuarioEnvio: req.body.UsuarioEnvio.Id,
                UsuairoDestino: req.body.UsuairoDestino.Id
            }, {
                    DataRecebimento: req.body.DataRecebimento,
                    DataVisualizacao: req.body.DataVisualizacao
                }).exec((err, row) => {
                    return callback(err, row);
                });
        },

        delete: (req, res, callback) => {
            mensagem.destroy({ Id: req.params.Id }).exec((err, row) => {
                return callback(err, row);
            });
        }

    };

    return repository;
};