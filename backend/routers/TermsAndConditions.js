const router = require("express").Router();
let TermsAndConditions = require("../models/TermsAndConditions");

router.route("/add").post((req, res) => {
    const heading = req.body.heading;
    const details = req.body.details;
    const date = new Date().toISOString().slice(0,10);
  
    const newTermsAndConditions = new TermsAndConditions({
      heading,
      details,
      date
    })
  
    newTermsAndConditions
      .save()
      .then(() => res.json("Terms and Conditions added successfully"))
      .catch((err) => res.status(400).json("Error : " + err))
})


  router.route("/view").get((req, res) => {
    TermsAndConditions.find()
      .then((TermsAndConditions) => res.json(TermsAndConditions))
      .catch((err) => res.status(400).json("Error: " + err))
  })
  
  router.route("/delete/:id").delete(async (req, res) => {
    let id = req.params.id
    await TermsAndConditions.findByIdAndDelete(id)
      .then(() => {
        res.status(200).send({ status: "Successfully deleted terms and conditions." })
      })
      .catch((err) => {
        console.log(err)
        res.status(500).send({ status: "Error while deleting terms and conditions.", error: err.message })
      })
  })

  router.route("/update/:id").post(async (req, res) => {
    let id = req.params.id
    const heading = req.body.heading
    const details = req.body.details
    const updateRangeTermsAndConditions = {
      heading,
      details,
    }
    const updateRange = await TermsAndConditions.findOneAndUpdate({ _id: id }, updateRangeTermsAndConditions)
      .then(() => {
        res.status(200).send({ status: "Successfully updated private policy" })
      })
      .catch((err) => {
        console.log(err)
        res.status(500).send({ status: "Error while updating private policy.", error: err.message })
      })
  })
  
  module.exports = router