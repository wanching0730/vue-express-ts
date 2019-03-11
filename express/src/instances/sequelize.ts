import * as Sequelize from 'sequelize';

const db = 'sampleApp';
const username = 'root';
const password = '';

export const sequelize = new Sequelize.Sequelize(db, username, password, {
  dialect: "mysql",
  port: 3306
});