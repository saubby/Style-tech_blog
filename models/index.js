const Post = require('./Post');
const User = require('./User');
const Comment = ('./Comment.js');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.belongsto(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsto(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsto(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

User.belongsto(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.belongsto(Comment, {
    foreignKey: 'post_id',
});

module.exports = { User, Post, Comment};