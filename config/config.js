var diskAdapter = require('sails-disk'),
    postgresAdapter = require('sails-postgresql'),
    msSqlAdapter = require('sails-sqlserver'),
    mySqlAdapter = require('sails-mysql');

module.exports = () => {

    var config = {

        // Setup Adapters
        // Creates named adapters that have been required
        adapters: {
            'default': diskAdapter,
            disk: diskAdapter,
            postgres: postgresAdapter,
            msSql: msSqlAdapter,
            mySql: mySqlAdapter
        },

        // Build Connections Config
        // Setup connections using the named adapter configs
        connections: {
            myLocalDisk: {
                adapter: 'disk'
            },
            myLocalSql: {
                adapter: 'msSql',
                database: 'fimple',
                host: 'fimple.database.windows.net',
                user: 'master',
                password: 'Fimple@2016',
                port: 1433,
                charset: 'utf8',
                options: {
                    encrypt: true   // use this for Azure databases
                }
            }
        },

        defaults: {
            migrate: 'safe'
        }

    };

    return config;
};
