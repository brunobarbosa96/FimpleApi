module.exports = (app) => {

    var notificacao = app.models.notificacao;
    var publicacao = app.models.publicacao;
    var usuario = app.models.usuario;

    var repository = {

        get: (req, res, callback) => {
            notificacao.find({ DataVisualizacao: null },
                {
                    select: ["Usuario", "Publicacao"]
                })
                .populate("Usuario", { select: ["Id", "Nome"] })
                .populate("Publicacao", { select: ["Id", "Usuario"] })
                .exec((err, row) => {
                    row = row.filter((x) => x.Publicacao);
                    usuario.find({ select: ["Id", "Nome", "Sobrenome"] })
                        .exec((error, rows) => {
                            if (error)
                                return callback(error);

                            for (var i in row)
                                row[i].Publicacao.Usuario = rows.filter((x) => x.Id == row[i].Publicacao.Usuario)[0];

                            return callback(err, row.filter((x) => x.Publicacao.Usuario.Id == req.params.IdUsuario));
                        });
                });
        },

        post: (req, res, callback) => {
            notificacao.create({
                Usuario: req.body.Usuario.Id,
                Publicacao: req.body.Publicacao.Id
            }).exec((err, row) => {
                return callback(err, row);
            });
        },

        put: (req, res, callback) => {
            notificacao.update({
                Id: req.body.Id
            }, {
                    DataVisualizacao: new Date()
                }).exec((err, row) => {
                    return callback(err, row);
                });
        },

        delete: (req, res, callback) => {
            notificacao.destroy({ Id: req.params.Id }).exec((err, row) => {
                return callback(err, row);
            });
        }

    };

    return repository;
};