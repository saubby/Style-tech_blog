const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const sequelize = require('../config/connection');
const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('DATABASE SYNCED');
    await seedUsers();
    console.log('COMMENTS SEEDED');
    await seedPosts();
    console.log('USER SEEDED');
    await seedComments();
    console.log('POSTS SEEDED');

    process.exit(0);
};

seedAll();