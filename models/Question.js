var db = require('../db')
var Question = db.model('Question', {
  username: { type: String, required: true },
  title: 	{ type: String, required: true },
  body:     { type: String, required: true },
  questionAnswered:  { type: Boolean, required: true},
  upvote:   { type: Number, required: true },
  answersCount:  { type: Number, required: true },
  downvote: { type: Number, required: true },
  date:     { type: Date,   required: true, default: Date.now }
})

module.exports = Question
