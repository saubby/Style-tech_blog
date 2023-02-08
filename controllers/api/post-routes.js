const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            attributes: ['id', 'post_text', 'title', 'created_at'],
            order: [['created_at', 'DESC']],
            include: [
                { model: User, attributes: ['username'] },
                { model: Comment, attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                  include: { model: User, attributes: ['username'] },
                },
            ],
        });
        res.status(200).json(postData.reverse());
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findAOne({
            where: { id: req.params.id },
            attributes: ['id', 'post_text', 'title', 'created_at'],
            order: [['created_at', 'DESC']],
            include: [
                { model: User, attributes: ['username'] },
                { model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: { model: User, attributes: ['username'] },
                },
            ],
        });
        if (!postData) {
            res.status(404).json({ message: 'No posts with this id!' });
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/:id', withAuth, (req, res) => {

    Post.create({
        title: req.body.title,
        post_text: req.body.post_text,
        user_id: req.session.user_id
    })
    .then(dbPostdata => res.json(dbPostdata))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {

    Post.update({
        title: req.body.title,
        post_text: req.body.post_text
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then(dbPostdata => {
        if (!dbPostdata) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostdata);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {

    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostdata => {
        if (!dbPostdata) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostdata);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;