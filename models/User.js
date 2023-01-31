const { Model, DataTypes } = require('sequlize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const { post } = require('../controllers/dashboard-routes');
const { beforeCreate, beforeUpdate } = require('../config/connection');

class User extends Model {
    checkPasswword(LoginPw) {
        return bcrypt.compareSync(LoginPw, this.password);
    }
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autiIncrement:true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4]
        }
    }
},
{
    hooks: {
        async beforeCreate(updateUserData) {
            updateUserData.password = await bcrypt.hash(updateUserData.password, 10);
            return updateUserData;
        },
        async beforeUpdate(updateUserData) {
            updateUserData.password = await bcrypt.hash(updateUserData.password, 10);
            return updateUserData;
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
});

module.exports = User;