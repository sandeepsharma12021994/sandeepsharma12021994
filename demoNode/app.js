var db = require('./model/db');
app.post('/saveUser', db.saveUser);
app.get('/showuser', db.showUser);