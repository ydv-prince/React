const postService = require('../services/postService');

class PostController {
    async createPost(req, res) {
        try {
            const postData = {
                title: req.body.title,
                content: req.body.content,
                imageUrl: req.body.imageUrl,
                author: req.user.id
            };
            const post = await postService.createPost(postData);
            res.status(201).json(post);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getFeed(req, res) {
        try {
            const limit = parseInt(req.query.limit) || 20;
            const posts = await postService.getFeed(limit);
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async toggleLike(req, res) {
        try {
            const likes = await postService.toggleLike(req.params.id, req.user.id);
            res.status(200).json({ likes });
        } catch (error) {
            const status = error.message === 'Post not found' ? 404 : 500;
            res.status(status).json({ message: error.message });
        }
    }

    async addComment(req, res) {
        try {
            const comments = await postService.addComment(req.params.id, req.user.id, req.body.text);
            res.status(201).json({ comments });
        } catch (error) {
            const status = error.message === 'Post not found' ? 404 : 500;
            res.status(status).json({ message: error.message });
        }
    }

    // NEW: Controller for nested replies
    async addReply(req, res) {
        try {
            const { id: postId, commentId } = req.params;
            const replies = await postService.addReply(postId, commentId, req.user.id, req.body.text);
            res.status(201).json({ replies });
        } catch (error) {
            const status = (error.message.includes('not found')) ? 404 : 500;
            res.status(status).json({ message: error.message });
        }
    }
}

module.exports = new PostController();
