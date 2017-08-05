module.exports = (app) => {

    var repository = require('./NotificacaoRepository')(app);
    var controller = {

        get: (req, res) => {
            try {
                repository.get(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao buscar notifica��es");
                    if (!row)
                        res.status(204).json("Nenhum registro encontrado");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao buscar notifica��es");
            }
        },

        post: (req, res) => {
            try {
                repository.post(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao inserir notifica��o");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao inserir notifica��o");
            }
        },

        put: (req, res) => {
            try {
                repository.put(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao atualizar notifica��o");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao atualizar notifica��o");
            }
        },

        delete: (req, res) => {
            try {
                repository.delete(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao excluir notifica��o");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao excluir notifica��o");
            }
        }
    };

    return controller;
};