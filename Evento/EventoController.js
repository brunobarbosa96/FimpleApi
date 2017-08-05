module.exports = (app) => {

    var repository = require('./EventoRepository')(app);
    var controller = {

        get: (req, res) => {
            try {
                repository.get(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao buscar eventos");
                    if (!row)
                        res.status(204).json("Nenhum registro encontrado");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao buscar eventos");
            }
        },

        post: (req, res) => {
            try {
                repository.post(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao inserir evento");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao inserir evento");
            }
        },

        put: (req, res) => {
            try {
                repository.put(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao atualizar evento");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao atualizar evento");
            }
        },

        delete: (req, res) => {
            try {
                repository.delete(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao excluir evento");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao excluir evento");
            }
        }
    };

    return controller;
};