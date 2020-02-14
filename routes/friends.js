
/*
 * GET home page.
 */
var data = require("../suggestions.json");

exports.view = function(req, res){
    res.render('friends', data);
};
