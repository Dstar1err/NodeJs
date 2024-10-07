const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment');

router.post('/posts/:id/comments', commentController.addComment);
router.put('/comments/:id', commentController.updateComment);
router.delete('/comments/:id', commentController.deleteComment);

module.exports = router;
