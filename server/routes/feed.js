var express = require('express');
var router = express.Router();
const feedbackcontroller = require('../controllers/feedbackcontroller');

router.route('/save').post(feedbackcontroller.create);

module.exports = router;
