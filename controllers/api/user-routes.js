const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] },
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});


router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findOne({
            attributes: { exclude: ['password'] },
            where: { id: req.params.id },
            include: [
                {
                    model: Post,
                    attributes: ['id', 'post_text', 'tittle', 'created_at'],
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'created_at'],
                    include: {
                        model: Post,
                        attributes: ['tittle']
                    },
                },
                {
                    model: Post,
                    attributes: ['tittle']
                },
            ],
        });
        if (!userData) {
            res.status(404).json({ message: 'No posts with this id!' });
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.logged_in = true;
            res.status(201).json({ message: 'Successfully created' });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: { username: req.body.username },
        });
        if (!userData) {
            res.status(400).json({ message: 'Not a valid username' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password, Please try again' });
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', (req, res) => {

    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserdata => {
            if (!dbUserdata) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserdata);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;