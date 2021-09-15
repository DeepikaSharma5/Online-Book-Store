const router = require("express").Router();
let Book = require("../models/Book");

router.route("/add").post((req, res) => {
    const title = req.body.title;
    const author_name = req.body.author_name;
    const publisher = req.body.publisher;
    const year = req.body.year;
    const isbn = req.body.isbn;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;
    const date = new Date().toISOString().slice(0,10);
  
    const newBook = new Book({
        title,
        author_name,
        publisher,
        year,
        isbn,
        description,
        price,
        image,
        date
    })
  
    newBook
      .save()
      .then(() => res.json("Book added successfully"))
      .catch((err) => res.status(400).json("Error : " + err))
})

  router.route("/view").get((req, res) => {
    Book.find({}).populate('categories', 'category_name description')
    .then(data => {
      res.status(200).send({data: data});
    })
    .catch((err) => res.status(400).json("Error: " + err))
  })
  

  router.route("/delete/:id").delete(async (req, res) => {
    let id = req.params.id
    await Book.findByIdAndDelete(id)
      .then(() => {
        res.status(200).send({ status: "Successfully deleted." })
      })
      .catch((err) => {
        console.log(err)
        res.status(500).send({ status: "Error while deleting.", error: err.message })
      })
  })

  router.route("/update/:id").post(async (req, res) => {
    let id = req.params.id
    const title = req.body.title;
    const author_name = req.body.author_name;
    const publisher = req.body.publisher;
    const year = req.body.year;
    const isbn = req.body.isbn;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;
    const updateRangeBook = {
      title, 
      author_name,
      publisher,
      year,
      isbn,
      description,
      price,
      image
    }
    const updateRange = await Book.findOneAndUpdate({ _id: id }, updateRangeBook)
      .then(() => {
        res.status(200).send({ status: "Successfully updated" })
      })
      .catch((err) => {
        console.log(err)
        res.status(500).send({ status: "Error while updating.", error: err.message })
      })
  })

  router.route("/view/:id").get((req, res) => {
    if (req.params && req.params.id) {
      Book.findById(req.params.id).populate('categories', 'category_name description')
      .then(data => {
          res.status(200).send({data: data});
      })
      .catch(error => {
          res.status(500).send({error: error.message});
      });

  }
  }) 

  
  module.exports = router
