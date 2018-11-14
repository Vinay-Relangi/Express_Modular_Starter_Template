module.exports = {
    getMovie: function (req, res) {
        res.send(req.params.moveId);
    },
    getMovies: function (req, res) {
        res.send("Hi...");
    },
    postMovie: function (req, res) {
        res.send(req.headers);
    }
}