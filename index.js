const express = require('express');
const app = express();

app.use('*', (req,res) => {
  res.end('Burst API Proxy is up!')
});

module.exports = app;
