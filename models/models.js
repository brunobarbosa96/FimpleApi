var Waterline = require('waterline');

module.exports = () => {

    var orm = new Waterline();

    orm.loadCollection(Waterline.Collection.extend({
        identity: 'entidade',
        connection: 'myLocalSql',
        attributes: {
            Id: { type: 'integer', primaryKey: true, autoIncrement: true },
            Nome: { type: 'string', required: true },
            Cep: { type: 'integer' },
            Categorias: {
                collection: 'categoria',
                via: 'Entidade'
            },
            Comentarios: {
                collection: 'notificacao',
                via: 'Entidade'
            },
            Publicacoes: {
                collection: 'publicacao',
                via: 'Entidade'
            }
        }
    }));

    orm.loadCollection(Waterline.Collection.extend({
        identity: 'categoria',
        connection: 'myLocalSql',
        attributes: {
            Id: { type: 'integer', primaryKey: true, autoIncrement: true },
            Nome: { type: 'string', required: true },
            Entidade: {
                model: 'entidade',
                foreignKey: true
            },
            Cursos: {
                collection: 'curso',
                via: 'Categoria'
            },
            Comentarios: {
                collection: 'notificacao',
                via: 'Categoria'
            },
            Publicacoes: {
                collection: 'publicacao',
                via: 'Categoria'
            }
        }
    }));

    orm.loadCollection(Waterline.Collection.extend({
        identity: 'curso',
        connection: 'myLocalSql',
        attributes: {
            Id: { type: 'integer', primaryKey: true, autoIncrement: true },
            Nome: { type: 'string', required: true },
            Categoria: {
                model: 'categoria',
                foreignKey: true
            },
            Usuarios: {
                collection: 'usuario',
                via: 'Curso'
            },
            Comentarios: {
                collection: 'notificacao',
                via: 'Curso'
            },
            Publicacoes: {
                collection: 'publicacao',
                via: 'Curso'
            },
            Eventos: {
                collection: 'evento',
                via: 'Curso'
            }
        }
    }));

    orm.loadCollection(Waterline.Collection.extend({
        identity: 'usuario',
        connection: 'myLocalSql',
        attributes: {
            Id: { type: 'integer', primaryKey: true, autoIncrement: true },
            Senha: { type: 'string', required: true },
            Rgm: { type: 'integer', required: true },
            Nome: { type: 'string', required: true },
            Sobrenome: { type: 'string', required: true },
            Apelido: { type: 'string' },
            Email: { type: 'string', required: true },
            DataNascimento: { type: 'date', required: true },
            DataInicioCurso: { type: 'date', required: true },
            Cep: { type: 'integer' },
            DataUltimoAcesso: { type: 'date' },
            Curso: {
                model: 'curso',
                foreignKey: true
            },
            Evento: {
                model: 'evento',
                foreignKey: true
            },
            UsuariosBloqueados: {
                collection: 'usuario',
                via: 'Id'
            },
            Notificacoes: {
                collection: 'notificacao',
                via: 'Usuario'
            },
            Comentarios: {
                collection: 'comentario',
                via: 'Usuario'
            },
            Publicacoes: {
                collection: 'publicacao',
                via: 'Usuario'
            },
            EventoParticipacao: {
                model: 'evento',
                foreignKey: true
            },
            Eventos: {
                collection: 'evento',
                via: 'Usuario'
            },
            MensagensEnvio: {
                collection: 'mensagem',
                via: 'UsuarioEnvio'
            },
            MensagensDestino: {
                collection: 'mensagem',
                via: 'UsuarioDestino'
            }
}
    }));

    orm.loadCollection(Waterline.Collection.extend({
        identity: 'notificacao',
        connection: 'myLocalSql',
        attributes: {
            Id: { type: 'integer', primaryKey: true, autoIncrement: true },
            DataVisualizacao: { type: 'date' },
            Usuario: {
                model: 'usuario',
                foreignKey: true
            },
            Evento: {
                model: 'evento',
                foreignKey: true
            },
            Publicacao: {
                model: 'publicacao',
                foreignKey: true
            },
            Curso: {
                model: 'curso',
                foreignKey: true
            },
            Entidade: {
                model: 'entidade',
                foreignKey: true
            },
            Categoria: {
                model: 'categoria',
                foreignKey: true
            }
        }
    }));

    orm.loadCollection(Waterline.Collection.extend({
        identity: 'publicacao',
        connection: 'myLocalSql',
        attributes: {
            Id: { type: 'integer', primaryKey: true, autoIncrement: true },
            Titulo: { type: 'string', required: true },
            Conteudo: { type: 'string', required: true },
            Data: { type: 'date', required: true },
            Usuario: {
                model: 'usuario',
                foreignKey: true
            },
            Entidade: {
                model: 'entidade',
                foreignKey: true
            },
            Categoria: {
                model: 'categoria',
                foreignKey: true
            },
            Curso: {
                model: 'curso',
                foreignKey: true
            }
        }
    }));

    orm.loadCollection(Waterline.Collection.extend({
        identity: 'comentario',
        connection: 'myLocalSql',
        attributes: {
            Id: { type: 'integer', primaryKey: true, autoIncrement: true },
            Conteudo: { type: 'string', required: true },
            Usuario: {
                model: 'usuario',
                foreignKey: true
            },
            Evento: {
                model: 'evento',
                foreignKey: true
            },
            Publicacao: {
                model: 'publicacao',
                foreignKey: true
            }
        }
    }));

    orm.loadCollection(Waterline.Collection.extend({
        identity: 'evento',
        connection: 'myLocalSql',
        attributes: {
            Id: { type: 'integer', primaryKey: true, autoIncrement: true },
            Titulo: { type: 'string', required: true },
            Conteudo: { type: 'string', required: true },
            Data: { type: 'date', required: true },
            Local: { type: 'string', required: true },
            Usuario: {
                model: 'usuario',
                foreignKey: true
            },
            Entidade: {
                model: 'entidade',
                foreignKey: true
            },
            Categoria: {
                model: 'categoria',
                foreignKey: true
            },
            Curso: {
                model: 'curso',
                foreignKey: true
            }
        }
    }));

    orm.loadCollection(Waterline.Collection.extend({
        identity: 'mensagem',
        connection: 'myLocalSql',
        attributes: {
            Id: { type: 'integer', primaryKey: true, autoIncrement: true },
            Conteudo: { type: 'string', required: true },
            DataEnvio: { type: 'date'},
            DataRecebimento: { type: 'date'},
            DataVisualizacao: { type: 'date'},

            UsuarioEnvio: {
                model: 'usuario'
            },
            UsuarioDestino: {
                model: 'usuario'
            }
        }
    }));

    return orm;
}
