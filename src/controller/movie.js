const Movie = require("../model/movie");
const logger = require("../logger/logger");

const addNewMovie = async (req, res) => {
  try {
    await Movie.create(req.body, (err, data) => {
      if (err) {
        res.status(500).send(err);
        logger.error(`Failed to add new movie: ${err.message}`);
      } else {
        res.status(200).send(data);
        logger.info(`Added new movie: ${data}`);
      }
    });
  } catch (error) {
    logger.error(`Failed to add new movie: ${error.message}`);
  }
};

const getMovie = async (req, res) => {
  try {
    await Movie.find()
      .then((data) => {
        res.status(200).send(data);
        logger.info(`Movie found: ${data}`);
      })
      .catch((err) => {
        res.status(500).send(err);
        logger.error(`Failed to get movie: ${err.message}`);
      });
  } catch (error) {
    logger.error(`Failed to get movie: ${error.message}`);
  }
};

const updateMovie = async (req, res) => {
  try {
    await Movie.updateOne({ _id: req.params.id }, { $set: { ...req.body } })
      .then((data) => {
        res.status(200).send(data);
        logger.info(`Updated movie: ${data}`);
      })
      .catch((err) => {
        res.status(500).send(err);
        logger.error(`Failed to update movie: ${err.message}`);
      });
  } catch (error) {
    logger.error(`Failed to update movie: ${error.message}`);
  }
};

const deleteMovie = async (req, res) => {
  try {
    await Movie.deleteOne({ _id: req.params.id })
      .then((data) => {
        res.status(200).send(data);
        logger.info(`Deleted movie: ${data}`);
      })
      .catch((err) => {
        res.status(500).send(err);
        logger.error(`Failed to delete movie: ${err.message}`);
      });
  } catch (error) {
    logger.error(`Failed to delete movie: ${error.message}`);
  }
};

module.exports = { addNewMovie, getMovie, updateMovie, deleteMovie };
