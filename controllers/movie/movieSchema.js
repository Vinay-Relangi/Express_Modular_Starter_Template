const Joi = require('joi');

const movieSchema = {}
movieSchema.createMovie = (movie) => {
    const movieSchema = Joi.object().keys({
        movieName: Joi.string().alphanum().min(3).max(30).required(),
        releaseYear: Joi.number().integer().min(1930).max(2019),
    }).with('movieName', 'releaseYear');
    return Joi.validate(movie, movieSchema).error;
}

module.exports = movieSchema;