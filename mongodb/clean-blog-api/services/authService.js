const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class AuthService {
    async registerUser(name, email, password) {
        let user = await User.findOne({ email });
        if (user) throw new Error('User already exists');

        user = new User({ name, email, password });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        return this.generateToken(user.id);
    }

    async loginUser(email, password) {
        const user = await User.findOne({ email });
        if (!user) throw new Error('Invalid credentials');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error('Invalid credentials');

        return this.generateToken(user.id);
    }

    generateToken(userId) {
        const payload = { user: { id: userId } };
        return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    }
}

module.exports = new AuthService();
