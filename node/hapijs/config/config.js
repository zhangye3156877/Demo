const obj = {};
if (process.env.NODE_ENV === 'production') {
  obj.host =  '127.0.0.1';
  obj.port = 3000;
  obj.username = 'root';
  obj.password = null;
  obj.database = 't1';
  obj.dialect = 'mysql';
  obj.operatorsAliases = false;
} else {
  obj.host =  '127.0.0.1';
  obj.port = 3000;
  obj.username = 'root';
  obj.password = '123456';
  obj.database = 'test';
  obj.dialect = 'mysql';
  obj.operatorsAliases = false;
}


module.exports = {
  "development": {
    "username": obj.username,
    "password": obj.password,
    "database": obj.database,
    "host": obj.host,
    "dialect": obj.dialect,
    // "operatorsAliases": obj.operatorsAliases
  },
  "production": {
    "username": obj.username,
    "password": obj.password,
    "database": obj.database,
    "host": obj.host,
    "dialect": obj.dialect,
    // "operatorsAliases": obj.operatorsAliases
  }
}
