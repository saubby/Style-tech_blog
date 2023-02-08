const { User } = require('../models');
const sequelize = require('../config/connection');

const userData = [
    {
    username: "Saubby",
    email: "saubby@gmail.com",
    password: "pass123456"
    },
    {
        username: "Ally",
        email: "ally@gmail.com",
        password: "pass123456"
    },
    {
        username: "Sweni",
        email: "sweni@gmail.com",
        password: "pass123456"
    },
    {
        username: "Kartik",
        email: "kartik@gmail.com",
        password: "pass123456"
    },
    {
        username: "Malek",
        email: "malek@gmail.com",
        password: "pass123456"
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;