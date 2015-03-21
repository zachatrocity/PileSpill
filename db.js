var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/pilespill', function () {
  console.log('mongodb connected')
})
module.exports = mongoose
