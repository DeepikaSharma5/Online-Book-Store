const router = require("express").Router()
let DeliveryStatus = require("../models/DeliveryStatus")

router.route("/add").post((req, res) => {
  const name = req.body.name
  const address1 = req.body.address1
  const address2 = req.body.address2
  const address3 = req.body.address3
  const phoneNumber = req.body.phoneNumber
  const status = req.body.status
  const date = new Date().toISOString().slice(0, 10)

  const newDeliveryStatus = new DeliveryStatus({
    name,
    address1,
    address2,
    address3,
    phoneNumber,
    status,
    date,
  })

  newDeliveryStatus
    .save()
    .then(() => res.json("Delivery Status added successfully"))
    .catch((err) => res.status(400).json("Error : " + err))
})

router.route("/view").get((req, res) => {
  DeliveryStatus.find()
    .then((DeliveryStatus) => res.json(DeliveryStatus))
    .catch((err) => res.status(400).json("Error: " + err))
})

router.route("/delete/:id").delete(async (req, res) => {
  let id = req.params.id
  await DeliveryStatus.findByIdAndDelete(id)
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
  const name = req.body.name
  const address1 = req.body.address1
  const address2 = req.body.address2
  const address3 = req.body.address3
  const phoneNumber = req.body.phoneNumber
  const status = req.body.status
  const updateRangeDeliveryStatus = {
    name,
    address1,
    address2,
    address3,
    phoneNumber,
    status,
  }
  const updateRange = await DeliveryStatus.findOneAndUpdate({ _id: id }, updateRangeDeliveryStatus)
    .then(() => {
      res.status(200).send({ status: "Successfully updated" })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({ status: "Error while updating.", error: err.message })
    })
})

module.exports = router
