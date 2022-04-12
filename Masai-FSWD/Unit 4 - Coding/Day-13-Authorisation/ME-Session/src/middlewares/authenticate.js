require("dotenv").config();
const jwt = require("jsonwebtoken");

//Verifying token using jwt 
function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
            if (err) return reject(err);
            return resolve(decoded);
        });
    })
}

// Middleware to authenticate the user such that only logged users can post
const authenticate = async (req, res, next) => {

    //Checking if there is a authentication header with bearer token at all in the request

    if (!req.headers.authorization)
        return res.status(400).send({ message: 'You are not authorized to post' });


    if (!req.headers.authorization.startsWith('Bearer '))
        return res.status(400).send({ message: 'You are not authorized to post' });

    //if there is a bearer token at all, then verify the token
    //getting the passed token

    const token = req.headers.authorization.trim().split(' ')[1];

    //verify the Token, we are returning promise in this case
    let decoded;
    try {
        decoded = await verifyToken(token);
        console.log({decoded: decoded});

    }
    catch (err) {
        return res.status(400).send({ message: 'You are not authorized to post' });
    }
    req.user = decoded.user;

    next();

};

module.exports = authenticate;