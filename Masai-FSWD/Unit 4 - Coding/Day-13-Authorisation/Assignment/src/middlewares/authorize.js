// Middleware to Authorize the user

const authorize = (permittedUsers) => {
    return (req,res,next) => {
        const user = req.user;
        let isAuthorised = false;

        permittedUsers.map(role => {
            if(user.role.includes(role))
                isAuthorised = true;
        });

        if(isAuthorised)
            next();
        else
            return res.status(401).send({message: 'You are not authorized'});
    }
};

module.exports = authorize;