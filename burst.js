const express = require('express');
const cors = require('cors');
const proxy = require('http-proxy-middleware');

const proxyOptions = {
  // target: "https://wallet.burst-alliance.org:8125",
  target: "http://node.burst.gittam.de",
  changeOrigin: true,
};

const app = express();
app.use(cors());
app.use('*',proxy(proxyOptions));

module.exports = app;
