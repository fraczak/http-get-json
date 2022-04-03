var http = require("http");

var httpGetJSON = (url, cb) => {
  http.get(url, res => {
    var result = [];
    res.setEncoding('utf8')
    .on('data', (chunk) => result.push(chunk))
    .on('end', () => {
      try { 
        cb(null, JSON.parse(result.join('')));
      } catch (err) { cb(err); }
    })
  }).on('error', cb);
};

module.exports = httpGetJSON;
