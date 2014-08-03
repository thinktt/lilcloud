var express = require('express'),
	mongoose = require('mongoose'), 
    app = express(),
    port = Number(process.env.PORT || 5000),
    mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/devdb',
    db
    ; 

mongoose.connect(mongoUri);
db = mongoose.connection;
db.on('error', function () {
  console.log('unable to connect to database at ' + mongoUri);
});


app.use('/', express.static('enigmaX/'));

app.listen(port, function() {
  console.log("Listening on " + port);
});


