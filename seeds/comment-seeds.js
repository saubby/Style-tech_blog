const { Comment } = require('../models');
const commentData = [
    {
        comment_text: "Its good to know how the node.js application works",
        post_id: 1,
        user_id: 4,
    },
    {
        comment_text: "Wow, Sequelize follows Semantic Versioning and supports Node v10 and above.",
        post_id: 5,
        user_id: 2,
    },
    {
        comment_text: "Ahh, So thats the main backend service where javascript works on the server-side of the application.",
        post_id: 3,
        user_id: 1,
    },
    {
        comment_text: "Did you it works mainy on Asynchronous & Non-blocking I/O",
        post_id: 2,
        user_id: 5,
    },
    {
        comment_text: "Yeah! some interseting fact Over 1.3 million packages are available in the main NPM registry.",
        post_id: 4,
        user_id: 3,
    },
    {
        comment_text: "Can you believe SQL, as a programming language, has been around for almost HALF A CENTURY!!!",
        post_id: 4,
        user_id: 2,
    },
    {
        comment_text: "Amazing!! express.js can reduce the coding time by half and still help us build efficient web applications.",
        post_id: 8,
        user_id: 4,
    },
    {
        comment_text: "Great. Now i know the contexts.",
        post_id: 7,
        user_id: 3,
    },
    {
        comment_text: "Did you know it makes the template execution faster than most other template engines.",
        post_id: 6,
        user_id: 2,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports =seedComments;