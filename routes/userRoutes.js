const _ = require("lodash");
const express = require("express");
const router = express.Router();
const keys = require("../config/keys");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const Joi = require("joi");
const User = require("../models/User");
const validateRegistery = require("../validation/registerValidation");
const errors = require("../validation/errors");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Users route working!" }));

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post("/register", (req, res, next) => {
  const userProps = req.body;
  const { email } = userProps;

  const { error } = validateRegistery(userProps);

  if (error) return res.status(400).json(error.details.map(d => d.message));

  User.findOne({ email })
    .then(user => {
      if (user) {
        next(errors.emailInUse);
      } else {
        const avatar = gravatar.url(email, {
          s: "200", // Size
          r: "pg", // Rating
          d: "mm" // Default
        });

        const newUser = new User({ ...userProps, avatar });

        bcrypt.hash(newUser.password, 10, (err, hash) => {
          if (err) next(err);
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(next);
        });
      }
    })
    .catch(next);
});

// @route   POST api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post("/login", (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then(user => {
      // Check for user
      console.log(user);
      if (!user) {
        next(errors.userNotFound);
      }

      // Check Password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User Matched
          const { id, name, avatar } = user;
          const payload = { id, name, avatar }; // Create JWT Payload

          // Sign Token
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 3600 * 24 },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          next(errors.passwordIncorrect);
        }
      });
    })
    .catch(next);
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  "/current_user",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { id, name, email } = req.user;
    res.json({ id, name, email });
  }
);

// @route   GET api/users/all
// @desc    Return all users
// @access  Private
router.get("/all", (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(next);
});

module.exports = router;
