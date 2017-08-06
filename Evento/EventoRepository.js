module.exports = (app) => {

    var evento = app.models.evento;
    var comentario = app.models.comentario;
    var repository = {

        get: (req, res, callback) => {
            evento.find({
                select: ["Id", "Conteudo", "Data", "updatedAt", "Usuario", "Titulo", "Local"]
            })
                .sort("updatedAt DESC")
                .paginate({ page: req.query.Pagina, limit: 30 })
                .populate("Usuario", { select: ["Id", "Nome", "Sobrenome"] })
                .exec((err, row) => {
                    comentario.find({ select: ["Id", "Conteudo", "Evento", "updatedAt", "Usuario"] })
                        .sort("updatedAt ASC")
                        .populate("Usuario", { select: ["Id", "Nome", "Sobrenome"] })
                        .exec((erro, rows) => {
                            if (erro)
                                return callback(erro);

                            for (var i in row)
                                row[i].Comentarios =
                                    rows.filter((x) => x.Evento == row[i].Id)
                                        .map((x) => {
                                            return {
                                                Id: x.Id,
                                                Conteudo: x.Conteudo,
                                                updatedAt: x.updatedAt,
                                                Usuario: {
                                                    Id: x.Usuario.Id,
                                                    Nome: x.Usuario.Nome
                                                }
                                            }
                                        });

                            return callback(err, row);
                        });
                });
        },

        getById: (req, res, callback) => {
            evento.findOne({ Id: req.body.Evento.Id }, { select: ["Usuario"] })
                .populate("Usuario", { select: ["Id", "Nome"] })
                .exec((err, row) => {
                    return callback(err, row);
                });
        },

        post: (req, res, callback) => {
            evento.create({
                Titulo: req.body.Titulo,
                Conteudo: req.body.Conteudo,
                Data: req.body.Data,
                Local: req.body.Local,
                Usuario: req.body.Usuario.Id,
                Entidade: req.body.Entidade.Id,
                Categoria: req.body.Categoria.Id,
                Curso: req.body.Curso.Id
            }).exec((err, row) => {
                return callback(err, row);
            });
        },

        put: (req, res, callback) => {
            evento.update({ Id: req.body.Id }, {
                Titulo: req.body.Titulo,
                Conteudo: req.body.Conteudo,
                Data: req.body.Data,
                Local: req.body.Local,
                Usuario: req.body.Usuario.Id,
                Entidade: req.body.Entidade.Id,
                Categoria: req.body.Categoria.Id,
                Curso: req.body.Curso.Id
            }).exec((err, row) => {
                return callback(err, row);
            });
        },

        delete: (req, res, callback) => {
            evento.destroy({ Id: req.params.Id })
                .exec((err, row) => {
                    return callback(err, row);
                });
        }

    };

    return repository;
};