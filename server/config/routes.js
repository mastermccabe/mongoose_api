var api = require('./../controllers/api.js')

module.exports = function(app) {
  app.get('/', function(req, res) {
    api.list(req, res);
  })
  app.get('/new/:name', function(req, res) {
    api.add(req, res);
  })
  app.get('/remove/:name', function(req, res) {
    api.remove(req, res);
  })
  app.get('/:name', function(req, res) {
    api.show(req, res);
  })
}
