const saleteRoute = (req, res) => {
  res.send("Salete Guglielmo");
};

const henriqueRoute = (req, res) => {
  res.send("Henrique Szilagy");
};

const lucasRoute = (req, res) => {
  res.send("Lucas Szilagy");
};

module.exports = {
  saleteRoute,
  henriqueRoute,
  lucasRoute,
};
