module.exports = (err, req, res, next) => {
  console.error(err)
  res.status(404).send('Not found')
}
