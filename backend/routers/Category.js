const router = require("express").Router();
let Category = require("../models/Category");

router.route("/add").post((req, res) => {
    const category_name = req.body.category_name;
    const description = req.body.description;
    const books = req.body.books;
    const date = new Date().toISOString().slice(0,10);
  
    const newCategory = new Category({
        category_name,
        description,
        books,
        date
    })
  
    newCategory
      .save()
      .then(() => res.json("Category added successfully"))
      .catch((err) => res.status(400).json("Error : " + err))
})


  router.route("/view").get((req, res) => {
    Category.find({}).populate('books', 'title author_name publisher year isbn description price image')
    .then(data => {
      res.status(200).send({data: data});
    })
    .catch((err) => res.status(400).json("Error: " + err))
  })
  
  router.route("/delete/:id").delete(async (req, res) => {
    let id = req.params.id
    await Category.findByIdAndDelete(id)
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
    const category_name = req.body.category_name;
    const description = req.body.description;    
    const books = req.body.books;
    const updateRangeCategory = {
      category_name,
      description,
      books
    }
    const updateRange = await Category.findOneAndUpdate({ _id: id }, updateRangeCategory)
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
      Category.findById(req.params.id).populate('books', 'title author_name publisher year isbn description price image')
      .then(data => {
          res.status(200).send({data: data});
      })
      .catch(error => {
          res.status(500).send({error: error.message});
      });

  }
  }) 

  
  module.exports = router
