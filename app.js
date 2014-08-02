var express = require('express'),
    app = express(),
    port = Number(process.env.PORT || 5000)
    ; 

app.use('/', express.static('enigmaX/'));

app.listen(port, function() {
  console.log("Listening on " + port);
});


