var router = require('express').Router()
var Question = require('../../models/Question')
var Answer = require('../../models/Answer')

router.get('/questions', function (req, res, next) {
  Question.find()
  .sort('-date')
  .exec(function (err, Questions) {
    if (err) { return next(err) }
    res.json(Questions)
  })
})

router.get('/questions/:id', function (req, res, next) {
  Question.findById(req.params.id, function(err, quest) {
        if (err) return next(err);
        if(quest == null){
          res.status(404).json({message: 'question not found'});
        } else {
              res.json(quest);
          }
    });
})

router.post('/questions', function (req, res, next) {
  var quest = new Question({body: req.body.body})
  quest.username = req.auth.username
  quest.title = req.body.title
  quest.questionAnswered = false
  quest.upvote = 0
  quest.answersCount = 0
  quest.downvote = 0
  quest.save(function (err, quest) {
    if (err) { return next(err) }
    res.status(201).json(quest)
  })
})

//add a new answer to a specific question
router.post('/questions/answer', function (req, res, next) {
  var ans = new Answer({body: req.body.body})
  ans.username = req.auth.username
  ans.questionId = req.body.questionId
  ans.selectedAnswer = false
  ans.upvotes = 0
  ans.downvotes = 0
  ans.save(function (err, ans) {
    if (err) { return next(err) }
    res.status(201).json(ans)
  })
})

//get all of the answers to specific questions
router.get('/questions/answer/:id', function (req, res, next) {
  console.log("im in the server")
  console.log(req.params.id)
  Answer.find()
  .where('questionId').equals(req.params.id)
  .sort('-upvotes')
  .exec(function (err, Questions) {
    if (err) { return next(err) }
    res.json(Questions)
  })
})

module.exports = router
