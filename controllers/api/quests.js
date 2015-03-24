var router = require('express').Router()
var Question = require('../../models/Question')

router.get('/quests', function (req, res, next) {
  Question.find()
  .sort('-date')
  .exec(function (err, Questions) {
    if (err) { return next(err) }
    res.json(Questions)
  })
})

router.post('/quests', function (req, res, next) {
  var quest = new Question({body: req.body.body})
  quest.username = req.auth.username
  quest.title = req.body.title
  quest.save(function (err, quest) {
    if (err) { return next(err) }
    res.status(201).json(quest)
  })
})

module.exports = router
