const User = require('../models/User');

const verifyAdmin = async (req, res, next) => {
    const db = getDb();

    const decodedEmail = req.email;
    const query = { email: decodedEmail };

    const user = User.findOne(query);

    if (user.role === 'admin') {
        next();
    } else {
        return res.status(403).send({ message: 'Forbidden Access' });
    }
};

module.exports = verifyAdmin;
