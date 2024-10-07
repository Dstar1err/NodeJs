const Comment = require('../../database/models/comment.js');
const Post = require('../../database/models/post.js');

const commentController = {};

commentController.addComment = async (req, res) => {
    const text = req.body.text
    const author  = req.body.author
    const postId = req.params.id;

	try {
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    const newComment = new Comment({
      text,
      author,
      postId
    });

    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

commentController.updateComment = async (req, res) => {
	try {
    const updatedComment = await Post.findByIdAndUpdate(
      req.params.id,
      { text: req.body.text,
        updated_at: Date.now() },
      { new: true }

    );

    if (!updatedComment) return res.status(404).json({ message: 'Comment not found' });
    res.json(updatedComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

}

commentController.deleteComment = async(req, res) => {
	try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);
    if (!deletedComment) return res.status(404).json({ message: 'Comment not found' });
    res.json({ message: 'Comment deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = commentController;


