module.exports = function parseData (data) {
  return JSON.parse(JSON.stringify(data).replace('&#8211;', '-').replace('&#038;', '&'))
}
