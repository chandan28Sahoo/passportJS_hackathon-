require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const User = require('../models/google')


passport.use(new GoogleStrategy({
    clientID: process.env.clientID,
    clientSecret: process.env.ClientSecret,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback: true
}, async(request, accessToken, refreshToken, profile, done) => {
    // console.log(request)
    const data = {
        id: profile.id,
        displayName: profile.displayName,
        email: profile._json.email,
        picture: profile._json.picture,
    }
    console.log(data);
    // return done(null, profile);
    const userData = await User.query().select('*').from("google").where('email', data.email)
        // console.log(userData);
    console.log('hello')
    if (userData != undefined && userData.length) {
        console.log('hello')
        const google1 = await User.query().update(data).where("email", data.email);
        done(null, google1)
        console.log("sucessfully update")
        console.log('hello')
    } else {
        const google1 = await User.query().insert(data)
        done(null, google1)
        console.log("sucessfully insert")
    }
}));