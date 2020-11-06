const { Pool } = require('pg');

const myURI =
  'postgres://gvxptule:qNgjGRNJ5tkTHlHgQtaCnSSoCmGif-_i@lallah.db.elephantsql.com:5432/gvxptule';

const URI = process.env.PG_URI || myURI;

const pool = new Pool({ connectionString: URI });

module.exports = {
  query: function (text, params, cb) {
    return pool.query(text, params, cb);
  },
};
