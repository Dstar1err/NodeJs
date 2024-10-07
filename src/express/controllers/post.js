import { Post } from "../../database/models/post.js";


export const getAllPost = async (req, res) => {
	try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getOnePost = async (req, res) => {
	const postId = req.params.id;
	try {
    const post = await Post.findById(postId);
    res.json(post);
  } catch (err) {
    res.status(404).json({ message: 'Post not found' });
  }
};


export const addPost = async (req, res) => {
	const newPost = new Post({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    tags: req.body.tags
  });
  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updatePost = async (req, res) => {
	try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        tags: req.body.tags,
        updated_at: Date.now()
      },
      { new: true }
    );
    res.json(updatedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

}

export const deletePost = async(req, res) => {
	try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



