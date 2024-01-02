// config/database.js

const { parse } = require('pg-connection-string');

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env('DATABASE_URL'));

  return {
    connection: {
      client: 'postgres',
      host,
      port,
      database,
      username: user,
      password,
      ssl: env.bool('DATABASE_SSL', false) ? {
        rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', false),
      } : false,
    },
    debug: false,
  };
};
