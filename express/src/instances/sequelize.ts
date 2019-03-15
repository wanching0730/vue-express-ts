import * as Sequelize from 'sequelize';

const db = 'subscription';
const username = 'root';
const password = '12345678';

export const sequelize = new Sequelize.Sequelize('mysql://root:12345678@newsletter-subscription.coyzmr8jvwy0.ap-southeast-1.rds.amazonaws.com:3306/subscription',{});
// export const sequelize = new Sequelize.Sequelize(db, username, password, {
//   host: 'newsletter-subscription.crxlxcw54ii4.us-east-2.rds.amazonaws.com',
//   dialect: "mysql",
//   port: 3306,
//   retry: {
//     match: [
//       /ETIMEDOUT/,
// 			/EHOSTUNREACH/,
// 			/ECONNRESET/,
// 			/ECONNREFUSED/,
// 			/ETIMEDOUT/,
// 			/ESOCKETTIMEDOUT/,
// 			/EHOSTUNREACH/,
// 			/EPIPE/,
// 			/EAI_AGAIN/,
// 			/SequelizeConnectionError/,
// 			/SequelizeConnectionRefusedError/,
// 			/SequelizeHostNotFoundError/,
// 			/SequelizeHostNotReachableError/,
// 			/SequelizeInvalidConnectionError/,
// 			/SequelizeConnectionTimedOutError/
//     ],
//     max: 5
//   }
// });