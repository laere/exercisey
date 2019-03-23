const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

// const validateEmail = email => {
//   const reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
//   return reg.test(email);
// };

const UserSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

UserSchema.pre("save", function(next) {
  const user = this;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        next(err);
      }
      user.password = hash;
    });
  });
  next();
});

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(newUser.password, salt, (err, hash) => {
//     if (err) {
//       next(err);
//     }
//     newUser.password = hash;
//     newUser
//       .save()
//       .then(user => res.json(user))
//       .catch(err => res.status(400).json(err));
//   });
// });

module.exports = User = mongoose.model("users", UserSchema);
