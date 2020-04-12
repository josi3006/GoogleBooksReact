const router = require("express").Router();
const bookRoutes = require("./books");
const booksController = require("../../controllers/booksController");
const axios = require("axios");


// const googleAPI=require("./googleAPI");

router
    .route("/google")
    .get(booksController.searchBooks);


require('dotenv').config();
api_key = process.env.API_KEY;
let apiQuery = `https://www.googleapis.com/books/v1/volumes?q="${formObject.searchbook}"&key=${apiKey}&maxResults=40`;


router.route("/search/:searchbook").get

    axios.get(apiQuery)
        .then(booksData => res.json(booksData))
        .catch(err => res.status(422).json(err));


router.route("/")
        .get(booksController.findAll)
        .post(booksController.create);


router
    .route("/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);

module.exports = router;


