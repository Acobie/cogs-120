
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
// var user = require('./routes/user');
var suggestions = require('./routes/suggestions');
var friends = require('./routes/friends');
var chats = require('./routes/chats');
var chatrooms = require('./routes/chatrooms');
var login = require('./routes/login');
var games = require('./routes/games');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/home', index.view);
// Example route
// app.get('/users', user.list);
app.get('/suggestions', suggestions.view);
app.get('/friends', friends.view);
app.get('/chats', chats.view);
app.get('/chatrooms', chatrooms.view);
app.get('/', login.view);
app.get('/games', games.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
