const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Post 1",
    "postContent": "Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero's 1st-century BC text De Finibus Bonorum et Malorum.",
  },
  {
    "postTitle": "Post 2",
    "postContent": "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,",
  },

];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;