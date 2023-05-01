function auth(req, res, next) {
    console.log(req);
    if(req.isAuthenticated()) {
        return next()
    }
    return res.redirect('/login')
}

module.exports = auth