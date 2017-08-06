module.exports = (app) => {

    var repository = require('./ChatRepository')(app);
    var controller = {

        getConversas: (req, res) => {
            try {
                repository.getConversas(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao buscar conversas");
                    if (!row)
                        res.status(204).json("Nenhum registro encontrado");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao buscar conversas");
            }
        },

        get: (req, res) => {
            try {
                repository.get(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao buscar mensagens");
                    if (!row)
                        res.status(204).json("Nenhum registro encontrado");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao buscar mensagens");
            }
        },

        post: (req, res) => {
            try {
                repository.post(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao inserir mensagem");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao inserir mensagem");
            }
        },

        put: (req, res) => {
            try {
                repository.put(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao atualizar mensagem");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao atualizar mensagem");
            }
        },

        delete: (req, res) => {
            try {
                repository.delete(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao excluir mensagem");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao excluir mensagem");
            }
        }
    };

    return controller;
};