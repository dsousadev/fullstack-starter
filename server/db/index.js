const Sequelize = require('sequelize');
const pg = require('pg');
//const connection = new Sequelize(remote url from .env);

let Template = connection.define('template', {
  exampleData: Sequelize.INTEGER
}, {
  timestamps: false
})

Template.sync();

module.exports = Template;
