module.exports = ((routes, passport) => {
    routes
        .get('/google', passport.authenticate('google', {
            scope: ['email', 'profile']
        }))
        .get('/auth/google/callback', passport.authenticate('google', {
            failureRedirect: '/auth/google/failure'
        }), (req, res, next) => {
            console.log(req.google1, req.isAuthenticated());
            res.send('user sucessfully logged in!')
        })
        .get('/auth/google/failure', (req, res, next) => {
            res.send('user  logged in failed!')
        })
        .get('/logout', (req, res, next) => {
            req.logout();
            console.log(req.isAuthenticated());
            res.send('user logged out successfully!')
        })

})