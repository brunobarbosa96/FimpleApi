module.exports = (app) => {

    var comentario = app.models.comentario;
    var repository = {

        post: (req, res, callback) => {
            comentario.create({
                Conteudo: req.body.Conteudo,
                Usuario: req.body.Usuario.Id,
                Publicacao: req.body.Publicacao.Id
            }).exec((err, row) => {
                return callback(err, row);
            });
        },

        put: (req, res, callback) => {
            comentario.update({ Id: req.body.Id }, {
                Conteudo: req.body.Conteudo,
                Usuario: req.body.Usuario.Id
            }).exec((err, row) => {
                return callback(err, row);
            });
        },

        delete: (req, res, callback) => {
            comentario.destroy({ Id: req.params.Id })
                .exec((err, row) => {
                    return callback(err, row);
                });
        }

    };

    return repository;
};