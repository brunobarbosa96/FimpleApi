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
			// //Postgres localhost
   //          myLocalSql: {
   //             adapter: 'postgres',
   //             database: 'Fimple',
   //             host: 'localhost',
   //             user: 'Admin',
   //             password: 'Fimple@2016',
   //             port: 5432,
   //             ssl: false
   //          }
             //myLocalSql: {
             //    adapter: 'mySql',
             //    database: 'fimple',
             //    host: '191.6.198.21',
             //    user: 'fimple',
             //    password: 'mudar123fimpleman',
             //    port: 3306,
             //    charset: 'utf8'
             //}

            //MySql localhost
            myLocalSql: {
                adapter: 'mySql',
                database: 'fimple',
                host: 'localhost',
                user: 'root',
                password: 'root',
                port: 3306,
                charset: 'utf8'
            }
        },

        defaults: {
            migrate: 'safe'
        }

    };

    return config;
};
