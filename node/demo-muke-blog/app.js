const serverHandle = (req, res) => {
  res.setHeader('Content-type', 'application/json');

  const resData = {
    name: 'x',
    site: 'imooc'
  }
  res.end(
    JSON.stringify(resData)
  )
}

module.exports = serverHandle;