var express = require('express'),
	mongoose = require('mongoose'), 
    app = express(),
    port = Number(process.env.PORT || 3000),
    mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/devdb',
    secret = process.env.SESSION_SECRET || 'non-secret secret for dev only',
    db, mongoTest, sessionOptions
    ; 


//...........MongoDB Connection.....................
mongoose.connect(mongoUri);
db = mongoose.connection;
db.on('error', function () {
  console.log('unable to connect to database at ' + mongoUri);
});


//.............Express Stack.....................

app.use(require('express-session')({
    key: 'session',
    secret: secret,
    store: require('mongoose-session')(mongoose),
    saveUninitialized: true,
  	resave: true
}));

app.use('/', express.static('enigmaX/'));


//..........Start Server..........................
app.listen(port, function() {
  console.log("Listening on " + port);
});


