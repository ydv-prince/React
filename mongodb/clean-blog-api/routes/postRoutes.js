const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const auth = require('../middleware/auth');

router.post('/', auth, postController.createPost);
router.get('/', postController.getFeed);
router.put('/:id/like', auth, postController.toggleLike);
router.post('/:id/comment', auth, postController.addComment);
// NEW: Route for nested replies
router.post('/:id/comment/:commentId/reply', auth, postController.addReply);

module.exports = router;
