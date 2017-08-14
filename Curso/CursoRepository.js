module.exports = (app) => {

    var curso = app.models.curso;
    var repository = {

        getAll: (req, res, callback) => {
            curso.find()
                .exec((err, row) => {
                    return callback(err, row.map((x) => {
                        return {
                            Id: x.Id,
                            Nome: x.Nome
                        }
                    }));
                });
        }
    };

    return repository;
};