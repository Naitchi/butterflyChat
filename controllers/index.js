function hi(req, res) {
  console.log('/hi');
  res.status(200).json('hi world!');
}

module.exports = {
  hi,
};
