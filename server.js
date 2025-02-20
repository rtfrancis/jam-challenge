const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const https = require("https");
const request = require('request');
const moment = require("moment");

app.use(express.static(__dirname + '/public'));

app.use(
    require("body-parser").urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

app.get('/songs', (req, res) => {
    request('https://api-stg.jam-community.com/song/trending', function (error, response, body) {
      if(!error && response.statusCode == 200) {
        res.json(JSON.parse(body))
      }
    });
})

app.post('/like', (req, res) => {
    request.post({url: 'https://api-stg.jam-community.com/interact/like? apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8', form: {id:req.body.id}}, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            res.json({success: true});
        } else {
            res.json({success: false});
        }
    });
})

app.post('/comment', (req, res) => {
    request.post({url: 'https://api-stg.jam-community.com/interact/like? apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8', form: {id:req.body.id, type: "song", message: req.body.message}}, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            res.json({success: true, date: moment().format("MMM Do YY")});
        } else {
            res.json({success: false});
        }
    });
})

app.listen(process.env.PORT || 8080, () => console.log("Listening"));
