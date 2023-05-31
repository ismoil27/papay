const Member = require("../models/Member");

let memeberController = module.exports;

memeberController.signup = async (req, res) => {
  try {
    console.log("POST: const/signup");
    const data = req.body;
    const member = new Member();
    const new_member = await member.signupData(data);

    res.json({ state: "succeed", data: new_member });
  } catch (err) {
    console.log(`ERROR, const/signup`);
    res.json({ state: "fail", message: err.message });
  }
};

memeberController.login = (req, res) => {
  console.log("POST cont.login");
  res.send("login sahifasidasiz");
};

memeberController.logout = (req, res) => {
  console.log("GET cont.logout");
  res.send("logout sahifasidasiz");
};
