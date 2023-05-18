const {chapterController} = require('../controllers/chapter.controller')
const router = require('express').Router();

router.post('/add',chapterController.addChapter);
router.get('/showlast/:phone',chapterController.getLastTransaction);
router.get('/all/:phone',chapterController.getAllChapters);


module.exports = router;