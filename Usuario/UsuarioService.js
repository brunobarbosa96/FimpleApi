module.exports = (app) => {

    var repository = require('./UsuarioRepository')(app);
    var service = {

        putSenha: (req, res, callback) => {
            repository.getSenhaAtual(req, res, (err, row) => {
                if (err)
                    return callback("Erro ao buscar senha antiga");

                if (req.body.SenhaAntiga != row.Senha)
                    return callback("Senha antiga inválida");

                repository.putSenha(req, res, callback);
            });
        }

    };

    return service;
};