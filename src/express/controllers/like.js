import {Like} from "../../database/models/like.js";
import { Comment } from "../../database/models/comment.js";
import { Post } from "../../database/models/post.js";

export const getAllLike = async (req, res) => {
  try {
    const  postId  = req.params.postId;

    const likes = await Like.find({ postId }).populate('author', 'name');
    res.status(200).json(likes);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving likes', error });
  }
};

export const getUserLike = async (req, res) => {
   try {
    const  userId  = req.params.userId;

    const likedPosts = await Like.find({ author: userId }).populate('postId', 'title content author');

    if (!likedPosts.length) {
      return res.status(404).json({ message: 'No liked posts found for this user' });
    }


    res.status(200).json(likedPosts.map(like => like.postId));
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving liked posts', error });
  }
};


export const addLike = async (req, res) => {
  try {
    const  author = req.body;
    const  postId  = req.params;

    console.log("post",postId, author);
    console.log("author", author);

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    const existingLike = await Like.findOne({ author, postId });
    if (existingLike) {
      return res.status(400).json({ message: 'You already liked this post' });
    }

    const newLike = new Like({
      author,
      postId
    });
    console.log(newLike)

    const savedLike = await newLike.save();
    res.status(201).json(savedLike);
  } catch (error) {
    res.status(500).json({ message: 'Error adding like', error });
  }
};



export const deleteLike = async (req, res) => {
  try {
    const { userId } = req.body;
    const { postId } = req.params;

    const like = await Like.findOneAndDelete({ author: userId, postId });
    if (!like) {
      return res.status(404).json({ message: 'Like not found for this post' });
    }

    res.status(200).json({ message: 'Like supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing like', error });
  }
};





