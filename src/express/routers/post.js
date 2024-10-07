const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.js');


router.get('/posts', postController.getAllPost);
router.get('/posts/:id', postController.getOnePost);
router.post('/posts', postController.addPost);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);

module.exports = router;