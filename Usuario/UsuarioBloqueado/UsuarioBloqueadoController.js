module.exports = (app) => {

    var repository = require('./UsuarioBloqueadoRepository')(app);
    var controller = {

        getAll: (req, res) => {
            try {
                repository.getAll(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao buscar usuários bloqueados");
                    if (!row)
                        res.status(204).json("Nenhum registro encontrado.");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao buscar usuários bloqueados");
            }
        },

        post: (req, res) => {
            try {
                repository.post(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao bloquear usuário");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao bloquear usuário");
            }
        },

        delete: (req, res) => {
            try {
                repository.delete(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao desbloquear usuário");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao desbloquear usuário");
            }
        }

    };

    return controller;
};