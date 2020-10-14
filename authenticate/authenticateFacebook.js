require('dotenv').config();
const passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/facebook')


passport.use(new FacebookStrategy({
    clientID: process.env.AppID,
    clientSecret: process.env.AppSecret,
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileFields: ['id', 'displayName'],
    passReqToCallback: true
}, async(request, accessToken, refreshToken, profile, done) => {
    // console.log(profile);
    // return done(null, profile);
    const data = {
        id: profile.id,
        displayName: profile.displayName,
        // email: profile._json.email,
        // picture: profile._json.picture,
    }
    console.log(data);
    const userData = await User.query().select('*').from("facebook").where('id', data.id);
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