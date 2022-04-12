//Middleware for role based Authorisation

const authorise = (permittedRoles) => {
    return (req,res,next) => {
        
        let isAuthorised = false;
        //we have already added the decoded user in req.user in authentication middleware
        let user = req.user;

        permittedRoles.map(role => {
            if(user.role.includes(role))
                isAuthorised = true;
        });

        if(isAuthorised)
            return next();
        else
            return res.status(401).send({message : "Not authorized"})
    }
}


module.exports = authorise;