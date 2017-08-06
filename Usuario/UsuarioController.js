module.exports = (app) => {

    var repository = require('./UsuarioRepository')(app);
    var service = require('./UsuarioService')(app);
    var controller = {

        getAll: (req, res) => {
            try {
                repository.getAll(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao buscar usuários");
                    if (!row)
                        res.status(204).json("Nenhum registro encontrado.");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao buscar usuários");
            }
        },

        get: (req, res) => {
            try {
                repository.get(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao buscar usuário");
                    if (!row)
                        res.status(204).json("Nenhum registro encontrado.");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao buscar usuário");
            }
        },

        post: (req, res) => {
            try {
                repository.post(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao inserir usuário");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao inserir usuário");
            }
        },

        put: (req, res) => {
            try {
                repository.put(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao atualizar usuário");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao atualizar usuário");
            }
        },

        putSenha: (req, res) => {
            try {
                service.putSenha(req, res, (err, row) => {
                    if (err)
                        res.status(500).json(err);
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao atualizar senha");
            }
        }

    };

    return controller;
};