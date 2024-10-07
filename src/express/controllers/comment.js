
import { Comment } from "../../database/models/comment.js";
import { Post } from "../../database/models/post.js";

const sanitize = {
  __v: false
}



export const  addComment = async (req, res) => {
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
    res.status(201).json(Comment.hydrate(savedComment, sanitize));
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateComment = async (req, res) => {
	try {
        console.log('body', req.body)
    const updatedComment = await Post.findOneAndUpdate(
        {_id: req.params.id},
      { text: req.body.text,
        updated_at: Date.now() },
      { projection: sanitize  },
        {returnOriginal: true}
    )
    res.json(updatedComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

}

export const deleteComment = async(req, res) => {
	try {
    await Comment.findByIdAndDelete(req.params.id);
    res.json({ message: 'Comment deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};




