const express = require('express');
const router = express.Router();

const movieCtrl = require('./movieController');

router.route('/:moveId').get(movieCtrl.getMovie);
router.route('/').post(movieCtrl.postMovie);
router.route('/').get(movieCtrl.getMovies);

module.exports = router;