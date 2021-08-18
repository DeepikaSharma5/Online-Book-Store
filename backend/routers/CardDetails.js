const router = require("express").Router();
const CardDetails = require("../models/CardDetails");
const bcrypt = require("bcrypt");

//add carddetails
router.route("/add").post(async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashCvc = await bcrypt.hash(req.body.cvc, salt);
    const newCard = new CardDetails({
      name: req.body.name,
      card_number: req.body.card_number,
      cvc: hashCvc,
      expiry_date: req.body.expiry_date,
    });

    const card = await newCard.save();
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json(error);
  }
});

//getCardDetails

router.route("/:id").get(async (req, res) => {
  try {
    const card = await CardDetails.findById(req.params.id);
    // const { cvc, ...others } = card._doc;
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Update

router.route("/:id").put(async (req, res) => {
  if (req.body.cvc) {
    const salt = await bcrypt.genSalt(10);
    req.body.cvc = await bcrypt.hash(req.body.cvc, salt);
  }

  try {
    const updatedCard = await CardDetails.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCard);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
