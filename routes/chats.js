
/*
 * GET home page.
 */
var data = require("../chats.json");

exports.view = function(req, res){
    res.render('chats', data);
};
