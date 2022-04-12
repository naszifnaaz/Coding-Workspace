require('dotenv').config();
var jwt = require('jsonwebtoken');

// Authenticate using Bearer Token
const authenticate = async (req,res,next) => {

    if(!req.headers.authorization)
        return res.status(400).send({message: 'You are not authorized to post'});
        
    if(!req.headers.authorization.startsWith('Bearer '))
        return res.status(400).send({message: 'You are not authorized to post'});

    const token = req.headers.authorization.split(' ')[1];
    
    try{
        let decoded = await verifyToken(token);
        req.user = decoded.user;
        console.log(req.user);
    }   
    catch(err){
        console.log(err);
        return res.status(400).send({message: 'You are not authorized to post'});
    }
    next();
}


//verify token
function verifyToken(token){
    return promise = new Promise(function(resolve, reject){
        jwt.verify(token,process.env.JWT_SECRET_KEY, function(err, decoded) {
            if(err)
                return reject(err);
            else
                return resolve(decoded);
          });
    })
}

module.exports = authenticate;