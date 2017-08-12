var diskAdapter = require('sails-disk'),
    msSqlAdapter = require('waterline-mssql');

module.exports = () => {

    var config = {

        // Setup Adapters
        // Creates named adapters that have been required
        adapters: {
            'default': diskAdapter,
            disk: diskAdapter,
            msSql: msSqlAdapter
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
                },
                max: 10,
                min: 1,
                idleTimeoutMillis: 1000
            }
        },

        defaults: {
            migrate: 'safe'
        }

    };

    return config;
};
