const router = require("express").Router()
let DeliveryStatuss = require("../models/DeliveryStatus")

router.route("/add").post((req, res) => {
  const name = req.body.name
  const address1 = req.body.address1
  const address2 = req.body.address2
  const address3 = req.body.address3
  const phoneNumber = req.body.phoneNumber
  const statuss = req.body.statuss
  const date = new Date().toISOString().slice(0, 10)

  const newDeliveryStatuss = new DeliveryStatuss({
    name,
    address1,
    address2,
    address3,
    phoneNumber,
    statuss,
    date,
  })

  newDeliveryStatuss
    .save()
    .then(() => res.json("Delivery Status added successfully"))
    .catch((err) => res.status(400).json("Error : " + err))
})

router.route("/view").get((req, res) => {
  DeliveryStatuss.find()
    .then((DeliveryStatuss) => res.json(DeliveryStatuss))
    .catch((err) => res.status(400).json("Error: " + err))
})

router.route("/delete/:id").delete(async (req, res) => {
  let id = req.params.id
  await DeliveryStatuss.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({ statuss: "Successfully deleted." })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({ statuss: "Error while deleting.", error: err.message })
    })
})

router.route("/update/:id").post(async (req, res) => {
  let id = req.params.id
  const name = req.body.name
  const address1 = req.body.address1
  const address2 = req.body.address2
  const address3 = req.body.address3
  const phoneNumber = req.body.phoneNumber
  const statuss = req.body.statuss
  const updateRangeDeliveryStatuss = {
    name,
    address1,
    address2,
    address3,
    phoneNumber,
    statuss,
  }
  const updateRange = await DeliveryStatuss.findOneAndUpdate({ _id: id }, updateRangeDeliveryStatuss)
    .then(() => {
      res.status(200).send({ status: "Successfully updated" })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({ status: "Error while updating.", error: err.message })
    })
})

module.exports = router
