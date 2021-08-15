const router = require("express").Router()
let DeliveryAddress = require("../models/DeliveryAddress")

router.route("/add").post((req, res) => {
  const name = req.body.name
  const address1 = req.body.address1
  const address2 = req.body.address2
  const address3 = req.body.address3
  const phoneNumber = req.body.phoneNumber
  const email = req.body.email
  const date = new Date().toISOString().slice(0, 10)

  const newDeliveryAddress = new DeliveryAddress({
    name,
    address1,
    address2,
    address3,
    phoneNumber,
    email,
    date,
  })

  newDeliveryAddress
    .save()
    .then(() => res.json("Delivery Address added successfully"))
    .catch((err) => res.status(400).json("Error : " + err))
})

router.route("/view").get((req, res) => {
  DeliveryAddress.find()
    .then((DeliveryAddress) => res.json(DeliveryAddress))
    .catch((err) => res.status(400).json("Error: " + err))
})

router.route("/delete/:id").delete(async (req, res) => {
  let id = req.params.id
  await DeliveryAddress.findByIdAndDelete(id)
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
  const email = req.body.email
  const updateRangeDeliveryAddress = {
    name,
    address1,
    address2,
    address3,
    phoneNumber,
    email,
  }
  const updateRange = await DeliveryAddress.findOneAndUpdate({ _id: id }, updateRangeDeliveryAddress)
    .then(() => {
      res.status(200).send({ status: "Successfully updated" })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({ status: "Error while updating.", error: err.message })
    })
})

module.exports = router
