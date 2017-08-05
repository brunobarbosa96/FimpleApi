module.exports = (app) => {

    var repository = require('./ComentarioRepository')(app);
    var service = require('./ComentarioService')(app);
    var controller = {

        post: (req, res) => {
            try {
                service.post(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao inserir comentário");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao inserir comentário");
            }
        },

        put: (req, res) => {
            try {
                repository.put(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao atualizar comentário");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao atualizar comentário");
            }
        },

        delete: (req, res) => {
            try {
                repository.delete(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao excluir comentário");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao excluir comentário");
            }
        }
    };

    return controller;
};