module.exports = (app) => {

    var repository = require('./NotificacaoRepository')(app);
    var controller = {

        get: (req, res) => {
            try {
                repository.get(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao buscar notificações");
                    if (!row)
                        res.status(204).json("Nenhum registro encontrado");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao buscar notificações");
            }
        },

        post: (req, res) => {
            try {
                repository.post(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao inserir notificação");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao inserir notificação");
            }
        },

        put: (req, res) => {
            try {
                repository.put(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao atualizar notificação");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao atualizar notificação");
            }
        },

        delete: (req, res) => {
            try {
                repository.delete(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao excluir notificação");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao excluir notificação");
            }
        }
    };

    return controller;
};