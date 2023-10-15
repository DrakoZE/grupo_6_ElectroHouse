function authMiddleware(req, res, next){
    if(!req.session.logUser){
        res.redirect("/users/login")
    }
    next();
}
module.exports = authMiddleware