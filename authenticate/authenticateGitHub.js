require('dotenv').config();
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const User = require('../models/github')


passport.use(new GitHubStrategy({
    clientID: process.env.ClientGID,
    clientSecret: process.env.ClientGSecret,
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
}, async(accessToken, refreshToken, profile, done) => {
    const data = {
        id: profile.id,
        displayName: profile.displayName,
        // email: profile._json.email,
        // picture: profile._json.picture,
    }
    console.log(data);
    // return done(null, profile);
    const userData = await User.query().select('*').from("github").where('id', data.id);
    console.log(userData);
    console.log('hello')
    if (userData != undefined && userData.length) {
        console.log('hello')
        const google1 = await User.query().update(data).where('id', data.id);
        done(null, google1)
        console.log("sucessfully update")
        console.log('hello')
    } else {
        const google1 = await User.query().insert(data)
        done(null, google1)
        console.log("sucessfully insert")
    }
}));