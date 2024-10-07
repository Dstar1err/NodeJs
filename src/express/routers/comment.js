const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment');

router.post('/:id/comments', commentController.addComment);
router.put('/:id', commentController.updateComment);
router.delete('/:id', commentController.deleteComment);

module.exports = router;
