var db = require('../db')
var Question = db.model('Question', {
  username: { type: String, required: true },
  body:     { type: String, required: true },
  date:     { type: Date,   required: true, default: Date.now }
})

module.exports = Question
