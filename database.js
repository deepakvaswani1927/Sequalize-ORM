const Sequelize = require('sequelize');
module.exports = new Sequelize('database3' ,'deepakvaswani' ,'rootpassword' ,{
    host: 'localhost',
    dialect: 'mssql',

pool:{
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
}
});
