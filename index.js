require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router();
const log = console.log;
const port = process.env.PORT || 3000;
const Users = require('./models/google');
const passport = require('passport');

app.use(passport.initialize());
app.use(passport.session());
app.use('/', router)

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

const auth = require('./authenticate/authenticateGoogle.js');
const auth1 = require('./authenticate/authenticateFacebook.js');
const auth2 = require('./authenticate/authenticateGitHub.js');
const auth3 = require('./authenticate/authenticateLinkedIN.js');

// google
app.use('/login', router)
require("./routes/google")(router, passport);

// facebook
app.use('/login', router)
require("./routes/facebook")(router, passport);

// github
app.use('/login', router)
require("./routes/gitHub")(router, passport);

// linkedin
app.use('/login', router)
require("./routes/linkedIn")(router, passport);



app.get('/users', (req, res) => {
    Users.query().then((users) => {
        res.json({ users });
    })
})


app.listen(port, () => {
    log(`port is running on ${port}`)
})
