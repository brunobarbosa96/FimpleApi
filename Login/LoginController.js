module.exports = (app) => {

    var repository = require('./LoginRepository')(app);
    var controller = {
        post: (req, res) => {
            try {
                repository.post(req, res, (err, row) => {
                    if (err)
                        res.status(500).json("Falha ao efetuar login");
                    if (!row)
                        res.status(401).json("Não autorizado: Login e/ou senha inválido(s).");
                    else
                        res.status(200).json(row);
                });
            } catch (e) {
                res.status(500).json("Erro ao efetuar login");
            }
        }
    };

    return controller;
};