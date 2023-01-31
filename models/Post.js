const { Model, DataTypes } = require('sequlize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const { post } = require('../controllers/dashboard-routes');

class Post extends Model {}

Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autiIncrement:true
    },
    tittle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    post_text: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
});

module.exports = Post;