const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({
  extend: false,
});


module.exports = function(app) {
  // middleware for loggin
  app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
  });

  app.get('/', (req, res, next) => {
    res.render('index');
    next();
  });

}
