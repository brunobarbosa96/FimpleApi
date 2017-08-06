module.exports = (app) => {
    var usuario = app.models.usuario;
    var repository = {
        post: (req, res, callback) => {
            usuario.findOne({
                Senha: req.body.Senha,
                or: [
                    { Rgm: +req.body.Email || "" },
                    { Email: req.body.Email }
                ]
            }).populate("Curso", { select: ["Id", "Nome"] })
                .exec((err, row) => {
                    return callback(err, row);
                });
        }
    };

    return repository;
};