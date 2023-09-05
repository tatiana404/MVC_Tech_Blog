const router = require('express').Router();
const { User } = require('../../models');

// Sigh in
router.post("/", async (req, res) => {
  try {
      const NewUser = await User.create({
          username: req.body.username,
          password: req.body.password,
      });
      req.session.save(() => {
          req.session.loggedIn = true;
          req.session.loggedInUserData = NewUser;
          return res.status(200).json(NewUser);
      });
  } catch (err) {
      console.log(err);
      return res.status(500).json(err);
  }
});

// Login 
router.post('/login', async (req, res) => {
  try {
    const Userdata = await User.findOne({ where: {  username: req.body.username,} });

    if (!Userdata) {
      res
        .status(400)
        .json({ message: 'this user do not have account' });
      return;
    }

    const validPassword = await User.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'User with this password do not have account' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = Userdata.id;
      req.session.username = Userdata.username;
      req.session.loggedIn = true;

      res.json({ user: Userdata, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
      req.session.destroy(() => {
          res.status(204).end();
      });
  } else {
      res.status(404).end();
  }
});

module.exports = router;