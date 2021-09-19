const router = require("express").Router();
let Payment = require("../models/Payment");

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const books = req.body.books;
  const quantity = req.body.quantity;
  const total = req.body.total;
  const status = req.body.status;

  const newPayment = new Payment({
    username,
    books,
    quantity,
    total,
    status,
  });

  newPayment
    .save()
    .then(() => res.json("Payment added successfully"))
    .catch((err) => res.status(400).json("Error : " + err));
});

router.route("/view").get((req, res) => {
  Payment.find({})
    .populate("books", "title price")
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete(async (req, res) => {
  let id = req.params.id;
  await Payment.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({ status: "Successfully deleted." });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error while deleting.", error: err.message });
    });
});

router.route("/update/:id").post(async (req, res) => {
  let id = req.params.id;
  const username = req.body.username;
  const books = req.body.books;
  const quantity = req.body.quantity;
  const total = req.body.total;
  const status = req.body.status;
  const updatePayment = {
    username,
    books,
    quantity,
    total,
    status,
  };
  const updatedPay = await Payment.findOneAndUpdate({ _id: id }, updatePayment)
    .then(() => {
      res.status(200).send({ status: "Successfully updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error while updating.", error: err.message });
    });
});

router.route("/:id").get((req, res) => {
  if (req.params && req.params.id) {
    Payment.findById(req.params.id)

      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }

  router.route("/delete/:id").delete(async (req, res) => {
    let id = req.params.id;
    await Payment.findByIdAndDelete(id)
      .then(() => {
        res.status(200).send({ status: "Successfully deleted." });
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .send({ status: "Error while deleting.", error: err.message });
      });
  });
});

module.exports = router;
