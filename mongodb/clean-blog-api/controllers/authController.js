const authService = require('../services/authService');

class AuthController {
    async register(req, res) {
        try {
            const { name, email, password } = req.body;
            const token = await authService.registerUser(name, email, password);
            res.status(201).json({ token });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const token = await authService.loginUser(email, password);
            res.status(200).json({ token });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new AuthController();
