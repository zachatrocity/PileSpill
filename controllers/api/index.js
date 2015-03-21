var router = require('express').Router()

router.use(require('./quests'))
router.use(require('./sessions'))
router.use(require('./users'))

module.exports = router
