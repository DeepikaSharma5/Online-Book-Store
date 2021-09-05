const jwt = require('jsonwebtoken');

//authorizes a web token to allow access to private routes

module.exports = function (req, res, next) {
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access Denied');

    try {
        // Only authorizes users with a seller token
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);

        //req.user available through out the app
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send('Invalid Token');
    }
}