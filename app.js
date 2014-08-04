var express = require('express'),
	mongoose = require('mongoose'), 
    app = express(),
    port = Number(process.env.PORT || 3000),
    mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/devdb',
    secret = process.env.SESSION_SECRET || 'non-secret secret for dev only',
    env = process.env.NODE_ENV || 'development',
    db, mongoTest, sessionOptions, requireHttps
    ; 


//...........MongoDB Connection.....................
mongoose.connect(mongoUri);
db = mongoose.connection;
db.on('error', function () {
  console.log('unable to connect to database at ' + mongoUri);
});



httpsRedirect = function (req, res, next) {
	var host = req.host; 
	if(env !== 'development' && !req.secure) {
     return res.redirect('https://'+ host);
   }  
   return next();
};




//.............Express Stack.....................

app.enable('trust proxy'); 
app.use(httpsRedirect);

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
  console.log("app is listening on port " + port);
  console.log('currently running in ' + env); 
});


