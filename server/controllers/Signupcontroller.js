const Signup = require("../model/Signup");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret = "triveni98";

const Signups = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const Sign = await Signup.findOne({ email: email });
    const hashpassword = await bcrypt.hash(password, 10);

    if (Sign) {
      res.status(200).json({ message: "User Already Exists" });
    } else {
      const signup = await Signup.create({
        name,
        email,
        password: hashpassword,
      });
      if (signup) {
        res.status(200).json({ message: "User registered Successfully" });
      } else {
        res.status(400).json({ message: "Error while registering" });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const Logins = async (req, res) => {
  const { email, password } = req.body;

  try {
    const log = await Signup.findOne({ email: email });
    if (!log || !(await bcrypt.compare(password, log.password))) {
      res.status(400).json({ message: "Invalid email or password" });
    } else {
      const token = await jwt.sign({ userId: log._id }, secret, {
        expiresIn: "30h",
      });
      res.status(200).json({ message: "Login successful", token });
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = { Signups, Logins };
