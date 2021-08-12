const router = require("express").Router();
let PrivatePolicy = require("../models/PrivatePolicy");

router.route("/add").post((req, res) => {
    const heading = req.body.heading;
    const details = req.body.details;
    const date = new Date().toISOString().slice(0,10);
  
    const newPrivatePolicy = new PrivatePolicy({
      heading,
      details,
      date
    })
  
    newPrivatePolicy
      .save()
      .then(() => res.json("Private Ploicy added successfully"))
      .catch((err) => res.status(400).json("Error : " + err))
})


  router.route("/view").get((req, res) => {
    PrivatePolicy.find()
      .then((PrivatePolicy) => res.json(PrivatePolicy))
      .catch((err) => res.status(400).json("Error: " + err))
  })
  
  router.route("/delete/:id").delete(async (req, res) => {
    let id = req.params.id
    await PrivatePolicy.findByIdAndDelete(id)
      .then(() => {
        res.status(200).send({ status: "Successfully deleted private policy." })
      })
      .catch((err) => {
        console.log(err)
        res.status(500).send({ status: "Error while deleting private policy.", error: err.message })
      })
  })

  router.route("/update/:id").post(async (req, res) => {
    let id = req.params.id
    const heading = req.body.heading
    const details = req.body.details
    const updateRangePrivatePolicy = {
      heading,
      details,
    }
    const updateRange = await PrivatePolicy.findOneAndUpdate({ _id: id }, updateRangePrivatePolicy)
      .then(() => {
        res.status(200).send({ status: "Successfully updated private policy" })
      })
      .catch((err) => {
        console.log(err)
        res.status(500).send({ status: "Error while updating private policy.", error: err.message })
      })
  })
  
  module.exports = router