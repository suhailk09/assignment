module.exports = function (app) {
    var User = require('../controllers/userController');

    app.route('/users/:pageNumber')
        .get(User.usersList);

    app.route('/users/:userId/friends')
        .get(User.userFriends);
};
