const router = require("express").Router();
let AboutUs = require("../models/AboutUs");

router.route("/add").post((req, res) => {
    const mission = req.body.mission;
    const missionInfo = req.body.missionInfo;
    const customerService = req.body.customerService;
    const convenience = req.body.convenience;
    const choice = req.body.choice;
    const story1 = req.body.story1;
    const story2 = req.body.story2;
    const story3 = req.body.story3;
    const date = new Date().toISOString().slice(0,10);
  
    const newAboutUs = new AboutUs({
        mission,
        missionInfo,
        customerService,
        convenience,
        choice,
        story1,
        story2,
        story3,
        date
    })
  
    newAboutUs
      .save()
      .then(() => res.json("About Us added successfully"))
      .catch((err) => res.status(400).json("Error : " + err))
})


  router.route("/view").get((req, res) => {
    AboutUs.find()
      .then((AboutUs) => res.json(AboutUs))
      .catch((err) => res.status(400).json("Error: " + err))
  })
  
  router.route("/delete/:id").delete(async (req, res) => {
    let id = req.params.id
    await AboutUs.findByIdAndDelete(id)
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
    const mission = req.body.mission;
    const missionInfo = req.body.missionInfo;
    const customerService = req.body.customerService;
    const convenience = req.body.convenience;
    const choice = req.body.choice;
    const story1 = req.body.story1;
    const story2 = req.body.story2;
    const story3 = req.body.story3;
    const updateRangeAboutUs = {
      mission,
      missionInfo,
      customerService,
      convenience,
      choice,
      story1,
      story2,
      story3
    }
    const updateRange = await AboutUs.findOneAndUpdate({ _id: id }, updateRangeAboutUs)
      .then(() => {
        res.status(200).send({ status: "Successfully updated" })
      })
      .catch((err) => {
        console.log(err)
        res.status(500).send({ status: "Error while updating.", error: err.message })
      })
  })
  
  module.exports = router
