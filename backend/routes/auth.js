const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const authRouter = Router();
const jwtSecret = `765rcbbu7687^(&^9UHGCTTH)95rcv`;

authRouter.post("/signup", async (req, res) => {
  const salt = await bcrypt.genSalt(16);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  // if(!/^(?=.[0-9])(?=.[a-z])(?=.[A-Z])(?=.\W)(?!.* ).{8,16}$/.test(req.body?.password ?? "")){
  //   res.status(400).json({
  //     "message": "Validation error: Validation is on password failed"
  //   });
  //   return;
  // }
  try {
    const user = await User.create({
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email,
    });
    const jwtToken = jwt.sign(
      { id: user.id, username: user.username },
      jwtSecret,
      {
        expiresIn: "1d",
      }
    );
    res.cookie("token", jwtToken, {
      httpOnly: true,
      maxAge: 86400000,
    });
    res.json({
      msg: "User was created successfully",
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

authRouter.post("/login", async (req, res) => {
  let user;
  if ("email" in req.body) {
    user = await User.findOne({ email: req.body.email });
  } else {
    user = await User.findOne({ username: req.body.username });
  }
  if (!user) {
    res.json({
      msg: `${"email" in req.body ? "Email" : "Username"} doesn't exists!`,
    });
    return;
  }
  const hashedPassword = user.password;
  const doesPasswordMatches = bcrypt.compareSync(
    req.body.password,
    hashedPassword
  );
  if (doesPasswordMatches) {
    const jwtToken = jwt.sign(
      { id: user.id, username: user.username },
      jwtSecret,
      {
        expiresIn: "1d",
      }
    );
    res.cookie("token", jwtToken, {
      httpOnly: true,
      maxAge: 86400000,
    });
    res.json({ msg: "You have successfully logged in!" });
  } else {
    res.json({ msg: "Password doesn't match!" });
  }
});

authRouter.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ msg: "Logout was successfull!" });
});

module.exports = authRouter;
