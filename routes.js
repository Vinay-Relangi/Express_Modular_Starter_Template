const express = require('express');
const router = express.Router();

const movieRouter = require('./controllers/movie/movieRouter');

router.use((req, res, next) => {
    // if (req.user === 'farmer') {
    //     next();
    // } else {
    //     res.status(403).send('Forbidden')
    // }
    next();
})
router.use('/movies', movieRouter);

module.exports = router;