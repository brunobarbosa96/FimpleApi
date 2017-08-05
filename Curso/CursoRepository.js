module.exports = (app) => {

    var curso = app.models.curso;
    var repository = {

        getAll: (req, res, callback) => {
            curso.find({ select: ['Id', 'Nome'] })
                .exec((err, row) => {
                    return callback(err, row);
                });

        }
    };

    return repository;
};