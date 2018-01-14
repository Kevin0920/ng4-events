var mongoose = require('mongoose');
var path = require('path');

var fs = require('fs');

mongoose.connect('mongodb://localhost/book-event');

var models_path = path.join(__dirname, './../models');
// var uristring =
// process.env.MONGOLAB_URI ||
// process.env.MONGOHQ_URL ||
// 'mongodb://kevin:qwertyuiop@ds131687.mlab.com:31687/meanevent'
// mongoose.connect(uristring);


fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
	    require(models_path + '/' + file);
	}
})
