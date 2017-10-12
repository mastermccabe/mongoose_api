var mongoose = require('mongoose');

var apiSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  }
})

mongoose.model('api', apiSchema);
