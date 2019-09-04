module.exports = {
    mongoURI: "mongodb+srv://testing:triptipstesting@cluster0-ar1ls.mongodb.net/test?retryWrites=true&w=majority",
    secretOrKey: "secret"
};
// triptipstesting

if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}