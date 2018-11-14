const express = require('express');
const router = express.Router();

const movieCtrl = require('./controllers/movieController');

router.use(function (req, res, next) {
    if (req.user === 'farmer') {
        next()
    } else {
        res.status(403).send('Forbidden')
    }
})

router.route('/movie/:moveId').get(movieCtrl.getMovie);
router.route('/movie').post(movieCtrl.postMovie);
router.route('/movies').get(movieCtrl.getMovies);

module.exports = router;