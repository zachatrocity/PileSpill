var db = require('../db')
var Answer = db.model('Answer', {
  username: { type: String, required: true },
  questionId:{type: String, required: true },
  body:     { type: String, required: true },
  upvotes:   { type: Number, required: true },
  downvotes: { type: Number, required: true },
  selectedAnswer: { type: Boolean, required: true},
  date:     { type: Date,   required: true, default: Date.now }
})

module.exports = Answer
