module.exports = ((routes, passport) => {
    routes.get('/linkedin', passport.authenticate('linkedin', { state: 'SOME STATE' })),
        routes.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
            failureRedirect: '/auth/google/failure'
        }), (req, res, next) => {
            console.log(req.user, req.isAuthenticated());
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