const router = require('express').Router();
const { Post, User } = require('../models/');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });
    
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('myposts', { posts, loggedIn: req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: {id: req.params.id},
      include: [
        User,
        {
          include: [User],
        },
      ],
    });

    if (postData) {
      const post = postData.get({ plain: true });
    
      res.render('single-post', { post, loggedIn: req.session.loggedIn});
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/mypage');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/mypage');
    return;
  }

  res.render('signup');
});

module.exports = router;
