const movieSchemaValidation = require('./movieSchema');

module.exports = {
    getMovie: (req, res) => {
        res.send(req.params.moveId);
    },
    getMovies: (req, res) => {
        res.send("Hi...");
    },
    postMovie: (req, res) => {
        let result = movieSchemaValidation.createMovie(req.body);
        res.send(result);
    }
}