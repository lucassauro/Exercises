const { posts } = require('./3_posts')


//normal middleware to be used encapsulated with express-rescue
function notFound(req, res) {
  res.status(404).json({ message: `This route ${req.path} does not exists.` })
}

// normal middleware using try/catch to catch error and call next error middleware.
// function notFound(req, res, next) {
//   try {
//     throw new Error(`This route ${req.path} does not exists.`)
//   } catch(e) {
//     next(e)
//   }
// }

// error middleware
// function error(err, req, res, next) {
//   res.status(500).json({ error: `${err.message}` })
// }


function getPost(req, res) {
  const { id } = req.params;
  const findId = posts.findIndex(post => post.id === parseInt(id));
  if (findId === -1) return res.status(404).json({ message: 'Post not found!' });

  res.status(200).json({ ...posts[findId] })
}

function getPosts(req, res) {
  if(posts.length === 0) return res.status(200).json({ posts: [] });
  res.status(200).json(posts);
}

module.exports = {
  notFound,
  getPost,
  getPosts,
}