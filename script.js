var express = require('express');
var bodyParser = require('body-parser');
var cargo = require('./public/js/cargo');
var request = require('request');
var app = express();

const hostname = '127.0.0.1';
const currentPort = 8080;


console.log(`We're Ready`)
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, resp) {
    resp.sendFile('./public/html/index.html', {
        root: './'
    });
})


app.post('/validate', function (req, res) {
    var total = null;
    req.body.parts.forEach(function (element) {
        total += parseInt(element.totalPrice);
    })

    if (total <= 200) {
        res.send({
            result: 'success'
        })
    } else {
        res.send({
            result: 'FAILED'
        })
    }


})

app.get('/cargo', function (req, res, next) {
    var temp = [];
    temp = cargo.createCargoParts();
    res.send(temp);
})

app.get('/cargo-validator', function (req, res) {
    res.sendFile('/public/html/cargo-validator.html', {
        root: './'
    })
})


app.get('/aspen', function (req, res) {
    res.sendFile('/public/html/aspen.html', {
        root: './'
    });
});

app.get('/alaska', function (req, res) {
    res.sendFile('/public/html/alaska.html', {
        root: './'
    });
});



app.get('/greece', function (req, res) {
    res.sendFile('/public/html/greece.html', {
        root: './'
    });
});



app.get('/germany', function (req, res) {
    res.sendFile('/public/html/germany.html', {
        root: './'
    });
});

app.get('/japan', function (req, res) {
    res.sendFile('/public/html/japan.html', {
        root: './'
    });
});



app.use(function (req, res) {
    res.sendStatus(404);
});

var server = app.listen(currentPort, hostname, function () {
    console.log(`Server running at http://${hostname}:${currentPort}/`);
    console.log('Express server listening on port %s.', currentPort);
    console.log('Thanks for waiting... the app is ready for action.')
});
