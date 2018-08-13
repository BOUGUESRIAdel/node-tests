const db = require('./db');

module.exports.handleSignUp = (email, password) => {
    //check mail exist
    db.saveUser({email,password});
    console.log("welcome to our plateforme!!");
};