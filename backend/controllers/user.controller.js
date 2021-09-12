const User = require("../models/user.model");
const WishList = require("../models/wishList.model");
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

// Input user details VALIDATION
const validateUser = (user) => {
  const emailRegExp = /\S+@\S+\.\S+/;
  const passwordRegExp = "^[a-zA-Z0-9]{3,30}$";
  const phoneRegExp = "^[0-9]{10,10}$";

  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().pattern(new RegExp(emailRegExp)).required(),
    phone: Joi.string().pattern(new RegExp(phoneRegExp)).min(10).required(),
    password: Joi.string().pattern(new RegExp(passwordRegExp)).required(),
  });

  return schema.validate(user);
};

// Login VALIDATION
function validateLogin(user) {
  const emailRegExp = /\S+@\S+\.\S+/;
  const passwordRegExp = "^[a-zA-Z0-9]{3,30}$";

  const schema = Joi.object({
    email: Joi.string().pattern(new RegExp(emailRegExp)).required(),
    password: Joi.string().pattern(new RegExp(passwordRegExp)).required(),
  });

  return schema.validate(user);
}

const checkEmail = (email) => {
  return User.findOne({ email: email }).then((result) => {
    return result;
  });
};

const createUser = async (req, res) => {
  if (req.body) {
    const { error } = validateUser(req.body);

    if (error) return res.status(401).send(error.details[0].message);

    checkEmail(req.body.email).then(async (userExists) => {
      if (!userExists) {
        //Hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          password: hashedPassword,
        });

        await newUser
          .save()
          .then(async (data) => {
            //createWishList
            const newList = new WishList({
              _id: data._id,
              owner: data._id,
              isPrivate: true,
              items: [],
            });

            await newList
              .save()
              .then((data) => {
                res.status(200).send({ data: data });
              })
              .catch((error) => {
                res.status(500).send({ error: error.message });
              });
            res.status(200).send({ data: data });
          })
          .catch((error) => {
            res.status(500).send({ error: error.message });
          });
      } else {
        res
          .status(500)
          .send("Sorry, an account already exists for this email.");
      }
    });
  }
};

const loginUser = async (req, res) => {
  if (req.body) {
    const { error } = validateLogin(req.body);

    if (error) return res.status(401).send(error.details[0].message);

    checkEmail(req.body.email).then(async (userExists) => {
      if (userExists) {
        //Verifying password
        const validPassword = await bcrypt.compare(
          req.body.password,
          userExists.password
        );
        if (!validPassword) return res.status(400).send("Incorrect password!");

        token = jwt.sign(
          { id: userExists._id, role: 1 },
          process.env.TOKEN_SECRET
        );

        res.header("auth-token", token);
        res.header("Access-Control-Expose-Headers", "auth-token");
        res.send(userExists._id);
      } else {
        res
          .status(500)
          .send(`Sorry, the user ${req.body.email} does not exist.`);
      }
    });
  }
};

const getUser = async (req, res) => {
  if (req.params && req.params.id) {
    await User.findById(req.params.id)
      .populate("users", "name email password phone")
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const updateUser = async (req, res) => {
  if (req.body) {
    await User.findByIdAndUpdate(req.body.id, req.body, {
      new: true,
      useFindAndModify: false,
    })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const updatePassword = async (req, res) => {
  if (req.body) {
    await User.findByIdAndUpdate(
      req.body.id,
      { password: req.body.password },
      { new: true, useFindAndModify: false }
    )
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

module.exports = {
  createUser,
  loginUser,
  getUser,
  updateUser,
  updatePassword,
};
