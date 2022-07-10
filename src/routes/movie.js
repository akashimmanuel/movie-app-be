const router = require("express").Router();
const {
  addNewMovie,
  getMovie,
  deleteMovie,
  updateMovie,
} = require("../controller/movie");
const verifyToken = require("../middleware/verifyToken");

router.post("/addMovie", addNewMovie);

router.get("/getMovies", getMovie);

router.patch("/updateMovie/:id", verifyToken, updateMovie);

router.delete("/deleteMovie/:id", verifyToken, deleteMovie);

module.exports = router;
