const { Client } = require('pg');
const client = new Client({
  // the following info is from ElephantSQL to login and serve data
  // user & default database
  user: 'gvxptule',
  // password
  password: 'qNgjGRNJ5tkTHlHgQtaCnSSoCmGif-_i',
  // server
  host: 'lallah.db.elephantsql.com',
  // user & default database
  database: 'gvxptule',
});

// this is a test to see what is currently in the table. it will show in the terminal
client
  .connect()
  .then(() => console.log('Connected successfuly'))
  .then(() => client.query('select * from golfer'))
  .then((result) => console.table(result.rows))
  .catch((e) => console.log(e))
  .finally(() => client.end());

module.exports = client;
