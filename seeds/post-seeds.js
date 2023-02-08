const { Post } = require('../models');

const postData = [
    {
        title: 'node.js',
        post_text: 'Node.js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language.',
        user_id: 1
    },
    {
        title: 'Node.js work',
        post_text: 'A Node application runs in a single process. Node does not create a new thread for every request, as is often the case with traditional server-side programs',
        user_id: 1
    },
    {
        title: 'NPM',
        post_text: 'NPM is the worlds largest Software Registry,The registry contains over 800000 code packages,Open-source developers use npm to share software.',
        user_id: 2,
    },
    {
        title: 'SQL',
        post_text: 'SQL is a standard language for accessing and manipulating databases.',
        user_id: 3,
    },
    {
        title: 'Sequelize',
        post_text: 'Sequelize provides excellent support for database synchronization, eager loading, associations, transactions, and database migrations while reducing development time and preventing SQL injections.',
        user_id: 3,
    },
    {
        title: 'Handelbars',
        post_text: 'Handlebars is a pure rendering engine. It works well if you want to allow to write templates for rendering HTML-pages, e-mails or markdown files.',
        user_id: 4,
    },
    {
        title: 'Handelbars path',
        post_text: 'Handlebars supports both normal and nested path, making it possible to look up properties nested below the current context. Handlebars also supports the (../) path segment. This segment references to the parent template scope and not to one level up in the context.',
        user_id: 4,
    },
    {
        title: 'Express.js',
        post_text: 'Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.',
        user_id: 5,
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;