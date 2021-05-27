var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/blog', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log('数据库链接成功');
    db.close();
});

//创建一个schema结构
var userSchema = new mongoose.Schema({
    user_name: {tyep:String},
    user_password: {tyep:String},
    user_emal: {tyep:String},
    user_sex: {tyep:String},
    user_birthday: {tyep:String},
    user_registered_time: {tyep:String},
}
);