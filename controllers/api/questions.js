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

//upvote 
router.put('/questions/up/', function (req, res, next) {
  if(req.body.type === "Question"){
    Question.findByIdAndUpdate(req.body.id, {$inc: { votes: 1}},
     function(err, quest) {
          if (err) return next(err);
          if(quest == null){
            res.status(404).json({message: 'question not found'});
          } else {
                res.json(quest);
            }
      });
  } 
  else if(req.body.type === "Answer"){
    Answer.findByIdAndUpdate(req.body.id, {$inc: { votes: 1}},
     function(err, ans) {
          if (err) return next(err);
          if(ans == null){
            res.status(404).json({message: 'answer not found'});
          } else {
                res.json(ans);
            }
      });
  }
})
//downvote 
router.put('/questions/down/', function (req, res, next) {
  if(req.body.type === "Question"){
    Question.findByIdAndUpdate(req.body.id, {$inc: { votes: -1}},
     function(err, quest) {
          if (err) return next(err);
          if(quest == null){
            res.status(404).json({message: 'question not found'});
          } else {
                res.json(quest);
            }
      });
  } 
  else if(req.body.type === "Answer"){
    Answer.findByIdAndUpdate(req.body.id, {$inc: { votes: -1}},
     function(err, ans) {
          if (err) return next(err);
          if(ans == null){
            res.status(404).json({message: 'answer not found'});
          } else {
                res.json(ans);
            }
      });
  }
})



router.post('/questions', function (req, res, next) {
  var quest = new Question({body: req.body.body})
  quest.username = req.auth.username
  quest.title = req.body.title
  quest.questionAnswered = false
  quest.votes = 0
  quest.answersCount = 0
  quest.save(function (err, quest) {
    if (err) { return next(err) }
    res.status(201).json(quest)
  })
})

//add a new answer to a specific question
router.post('/questions/answer', function (req, res, next) {
  console.log(req.body);
  var ans = new Answer({body: req.body.body})
  ans.username = req.auth.username
  ans.questionId = req.body.questionId
  ans.selectedAnswer = false
  ans.votes = 0
  ans.save(function (err, ans) {
    console.log(err)
    if (err) { return next(err) }
    res.status(201).json(ans)
  })
})


//get all of the answers to specific questions
router.get('/questions/answer/:id', function (req, res, next) {
  Answer.find()
  .where('questionId').equals(req.params.id)
  .sort('-upvotes')
  .exec(function (err, Questions) {
    if (err) { return next(err) }
    res.json(Questions)
  })
})

router.get('/questions/edit/:id', function (req, res, next) {
   Answer.findById(req.params.id, function(err, ans) {
        if (err) return next(err);
        if(ans == null){
          res.status(404).json({message: 'answer not found'});
        } else {
              res.json(ans);
          }
    });
})

router.put('/questions/edit/submit', function (req, res, next) {
  Answer.findByIdAndUpdate(req.body.id, {body: req.body.body},
     function(err, ans) {
          if (err) return next(err);
          if(ans == null){
            res.status(404).json({message: 'answer not found'});
          } else {
                res.json(ans);
            }
      });
})



module.exports = router
