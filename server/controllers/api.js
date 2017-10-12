var mongoose = require('mongoose')
var api = mongoose.model('api')


// api.list(req, res);
//
// api.add(req, res);
//
// api.remove(req, res);
//
//
// api.show(req, res);

module.exports = {
  list: function(req, res) {
    api.find({}, function(err, res2) {
      res.json(res2);
    })
  },
  add: function(req, res) {
    var addUser = new api({
      name: req.params.name
    });
    addUser.save(function(err) {
      if (err) {
        console.log("error", {
          error: err
        });
      } else {
        res.redirect('/');
      }
    })
  },
  remove: function(req, res) {
    api.remove({
      name: req.params.name
    }, function(err) {
      if (err) {
        console.log("error", {
          error: err
        });
      } else {
        res.redirect('/');
      }
    })
  },
  show: function(req, res) {
    api.find({
      name: req.params.name
    }, function(err, res2) {
      res.json(res2);
    })
  }

}
