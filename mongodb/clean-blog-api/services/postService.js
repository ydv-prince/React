const Post = require('../models/Post');

class PostService {
    async createPost(postData) {
        const newPost = new Post(postData);
        return await newPost.save();
    }

    async getFeed(limit = 20) {
        return await Post.find()
            .sort({ createdAt: -1 })
            .populate('author', 'name')
            .limit(limit);
    }

    async toggleLike(postId, userId) {
        const post = await Post.findById(postId);
        if (!post) throw new Error('Post not found');

        const hasLiked = post.likes.includes(userId);
        if (hasLiked) {
            post.likes.pull(userId);
        } else {
            post.likes.push(userId);
        }
        
        await post.save();
        return post.likes;
    }

    async addComment(postId, userId, text) {
        const post = await Post.findById(postId);
        if (!post) throw new Error('Post not found');

        post.comments.push({ user: userId, text });
        await post.save();
        return post.comments;
    }

    // NEW: Handle nested replies
    async addReply(postId, commentId, userId, text) {
        const post = await Post.findById(postId);
        if (!post) throw new Error('Post not found');

        // Mongoose provides a handy .id() method to find sub-documents
        const comment = post.comments.id(commentId);
        if (!comment) throw new Error('Comment not found');

        comment.replies.push({ user: userId, text });
        await post.save();
        return comment.replies;
    }
}

module.exports = new PostService();
