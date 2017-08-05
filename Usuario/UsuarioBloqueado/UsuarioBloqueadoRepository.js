//require('devbox-linq');
module.exports = (app) => {

    var usuario = app.models.usuario;
    var repository = {

        getAll: (req, res, callback) => {
                usuario.findOne({ Id: req.params.Id }, {select: ["Id", "Nome", "UsuariosBloqueados"]})
                    .populate("UsuariosBloqueados", {select: ["Id", "Nome"]})
                    .exec((err, row) => {
                        return callback(err, row.UsuariosBloqueados);
                    });
        },

        post: (req, res, callback) => {
            usuario.findOne({ Id: req.body.IdUsuarioBloqueou })
                .populate("UsuariosBloqueados")
                .exec((error, user) => {
                    if (error)
                        return callback(error, null);

                    try {
                        var usuariosBloqueados = [];

                        if (user)
                            usuariosBloqueados = user.UsuariosBloqueados.map((u) => u.Id);
                        usuariosBloqueados.push(+req.body.IdUsuarioBloqueado);

                        usuario.update({ Id: req.body.IdUsuarioBloqueou }, {
                            UsuariosBloqueados: usuariosBloqueados
                        }).exec((err, row) => {
                            return callback(err, row);
                        });
                    } catch (erro) {
                        return callback("Erro ao bloquear usuário " + erro);
                    }
                });
        },

        delete: (req, res, callback) => {
            usuario.findOne({ Id: req.query.IdUsuarioBloqueou })
                .populate("UsuariosBloqueados")
                .exec((err, user) => {
                    if (err)
                        return callback(err, null);

                    try {
                        var usuariosBloqueados = [];

                        if (user)
                            usuariosBloqueados = user.UsuariosBloqueados.map((u) => u.Id);

                        for (var i in usuariosBloqueados)
                            if (usuariosBloqueados[i] == req.query.IdUsuarioBloqueado)
                                usuariosBloqueados.splice(i, 1);
                        //usuariosBloqueados.Remove(x => x == req.query.IdUsuarioBloqueado);

                        usuario.update({ Id: req.query.IdUsuarioBloqueou }, {
                            UsuariosBloqueados: usuariosBloqueados
                        }).exec((err, row) => {
                            return callback(err, row);
                        });
                    } catch (error) {
                        return callback("Erro ao bloquear usuário " + error);
                    }
                });
        }
    };

    return repository;
};