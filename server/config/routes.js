var mainroutes = require('../controllers/mainControl.js');
var path = require('path');


module.exports = function(app){
    app.post('/register', function(req, res) {
      mainroutes.register(req, res);
    })
    
    app.post('/login', function(req, res) {
      mainroutes.login(req, res);
    })

    app.post('/events/user/:id', function(req, res) {
      mainroutes.createEvent(req, res);
    })

    app.put('/user/edit/:id', (req, res, next)=>{
      mainroutes.update(req, res);
    })

    app.post('/join/:event_id/:user_id', (req, res, next) => {
      mainroutes.join(req, res);
    })

    app.post('/cancle/:event_id/:user_id', (req, res, next)=> {
      mainroutes.cancelEvent(req, res);
    })

    app.get('/events', function(req, res) {
      mainroutes.allEvent(req, res);
    })

    app.get('/oneEvent/:id', function(req, res) {
      mainroutes.getOneEvent(req, res);
    })

    app.delete('/events/:id', (req, res) => {
      mainroutes.destory(req, res);
    })

    app.all("*",function(req,res){
		res.sendFile('index.html', { root: './client/dist' });
	})

 }