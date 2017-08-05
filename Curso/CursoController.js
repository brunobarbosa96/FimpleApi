module.exports = (app) => {

    var repository = require('./CursoRepository')(app);
    var controller = {

        getAll: (req, res) => {
            try {
                repository.getAll(req,
                    res,
                    (err, row) => {
                        if (err)
                            res.status(500).json("Falha ao buscar cursos");
                        if (!row)
                            res.status(204).json("Nenhum registro encontrado");
                        else
                            res.status(200).json(row);
                    });
            } catch (e) {
                res.status(500).json("Erro ao buscar cursos");
            }
        }

    };

    return controller;
};