var User = require('../models/userModel.js');

exports.index = function(req,res){
  res.send('You are in')
};
exports.usersList = function(req,res){
    const pageNumber = parseInt(req.params.pageNumber) || 1;
    User.usersList(pageNumber, function(err, users) {

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', users);



        res.send(users);
    });
}
exports.userFriends = function(req,res){
    User.userFriends(req.params.userId, function(err, users) {

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', users);
        res.send(users);
    });
}
