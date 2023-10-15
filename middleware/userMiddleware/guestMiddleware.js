function guestMiddleware(req, res, next){

    if(req.session.logUser){
        
        res.redirect("/users/profile")
    }
    next();
}
module.exports = guestMiddleware