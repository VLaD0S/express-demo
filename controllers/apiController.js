module.exports = function (app) {


  // rest api shenanniganz
  app.get('/api/person/:id', function(req, res) {
    // get data from database
    res.json({ firstname: "jonny", lastname: "doey"})
  });

  app.post('/api/person', function(req, res) {
    // save le data to the database
  });

  app.delete('/api/person/:id', function(req, res) {
    // delete form database
  });

}
