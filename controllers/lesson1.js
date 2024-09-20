const henriqueRoute = (req, res) => {
  res.send("Henrique");
};

const lucasRoute = (req, res) => {
  res.send("Lucas");
};

module.exports = {
  henriqueRoute,
  lucasRoute,
};
