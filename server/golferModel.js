const { pool } = require { 'pg' };
const pg = require{'pg'}
const PG_URL = 'postgres://gvxptule:qNgjGRNJ5tkTHlHgQtaCnSSoCmGif-_i@lallah.db.elephantsql.com:5432/gvxptule'

const pool = new pool ({
  connectionString: PG_URL,
});