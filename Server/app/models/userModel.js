var sql = require('./db.js');

var User = function (user) {
    this.task = user.task;
    this.status = user.status;
    this.created_at = new Date();
}

User.usersList = function (pageNumber,result) {

    const pageSize = 5;
    const offset = (pageNumber - 1)*pageSize;

    sql.query("Select * from users limit "+offset+","+pageSize, function (err, res) {
        sql.query("Select COUNT(*) as total from users", function (err, total) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                console.log('users : ', total);
                result(null, {res,total});
            }
        });

    });
}
User.userFriends = function (userId, result) {
    sql.query("SELECT * FROM users where id = " + userId + " UNION SELECT u.id,u.first_name,u.last_name,u.avatar FROM users as u INNER JOIN friends_list as fl ON fl.friend_id = u.id where fl.user_id=" + userId, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('users : ', res);

            result(null, res);
        }
    });
}
module.exports = User;
