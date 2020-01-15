const router = require('express').Router();
const Posts = require('../data/db'); //  posts model database library containing our helper methods

//  GET    /api/posts
router.get('/', (req, res) => {
  Posts.find()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      res.status(500).json({
        error: 'The posts information could not be retrieved.'
      });
    });
});

// GET   /api/posts/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  // console.log(req);
  Posts.findById(id)
    .then(post => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({
          message: 'The post with the specified ID does not exist.'
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: 'The post information could not be retrieved.'
      });
    });
});

module.exports = router;
