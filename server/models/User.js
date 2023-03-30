const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          return /^\S+@\S+\.\S+$/.test(value);
        },
        //validate:{isEmail: true},
        message: "Invalid email address",
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    events: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
  next();
});

userSchema.methods.checkPassword = async function (loginPw) {
  return await bcryptjs.compare(loginPw, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
