let memeberController = module.exports;

memeberController.home = (req, res) => {
  console.log("GET cont.home");
  res.send("home sahifasidasiz");
};

memeberController.signup = (req, res) => {
  console.log("POST cont.signup");
  res.send("signup sahifasidasiz");
};

memeberController.login = (req, res) => {
  console.log("POST cont.login");
  res.send("login sahifasidasiz");
};

memeberController.logout = (req, res) => {
  console.log("GET cont.logout");
  res.send("logout sahifasidasiz");
};
