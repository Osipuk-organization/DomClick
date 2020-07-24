var fs = require("fs");
var mongoose = require('mongoose');
var tunnel = require('tunnel-ssh');

//===== db connection =====

var config = {
    username: 'boss',
    password: 'oIKo7c!sxG37',
    host: '45.89.66.253',
    port: 2255,
    dstPort: 30000,
};

var server = tunnel(config, function (error, server) {
    if (error) {
        console.log("SSH connection error: " + error);
    }
    console.log('SSH ok');
    mongoose.connect('mongodb://localhost:27017/DomClickDev', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });

    console.log('Connect ok');

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'DB connection error:'));
    db.once('open', function () {
        console.log("DB connection successful");
    });
});