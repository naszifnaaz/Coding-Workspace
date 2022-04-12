require("dotenv").config();
const jwt = require("jsonwebtoken");

function verifyToken(token)
{
    return promise = new Promise(function(resolve, reject) {
        jwt.verify(token, process.env.JWT_TOKEN_KEY, function(err, decoded) {
            if(err) return reject(err)
            return resolve(decoded);
          });
    })
}


const authenticate = async (req,res,next) => {
    if(!req.headers.authorization)
        return res.status(400).send({message: 'You are not authorized to post'});


    if(!req.headers.authorization.startsWith('Bearer '))
        return res.status(400).send({message: 'You are not authorized to post'});
    
    const token = req.headers.authorization.trim().split(' ')[1];

    try{
        let decoded = await verifyToken(token);
        req.userId = decoded.user._id;
    }
    catch(err) {
        console.log(err);
        return res.status(400).send({message: 'You are not authorized to post'});
    }

    next();
}

module.exports = authenticate;