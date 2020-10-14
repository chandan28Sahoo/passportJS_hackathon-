module.exports = ((routes, passport) => {
    routes
        .get('/github',
            passport.authenticate('github', { scope: ['user:email'] }));

    routes
        .get('/auth/github/callback',
            passport.authenticate('github', { failureRedirect: '/login' }), (req, res, next) => {
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