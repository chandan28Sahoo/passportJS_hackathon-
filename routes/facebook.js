module.exports = ((routes, passport) => {
    routes
        .get('/facebook',
            passport.authenticate('facebook')
        );
    routes
        .get('/auth/facebook/callback',
            passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res, next) => {
                console.log(req.user, req.isAuthenticated());
                res.send('user sucessfully logged in!')
            })
        .get('/login', (req, res, next) => {
            res.send('user  login failed!')
        })
        .get('/logout', (req, res, next) => {
            req.logout();
            console.log(req.isAuthenticated());
            res.send('user logged out successfully!')
        })

})