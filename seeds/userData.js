const { User } = require('../models');

const userdata =
[
  {
    "username": "Manny",
    "password": "2219215"
  },
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;

