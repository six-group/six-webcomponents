const express = require('express');
const path = require('path');

const app = express();

app.use(({ method, url }, res, next) => {
  console.log(`[ ${method} ] ${url}`);
  next();
});

app.get('/users.json', (req, res) => {
  const users = require('./users.json');
  setTimeout(() => {
    res.json(users);
  }, 300);
});

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/ui-library', express.static(path.join(__dirname, '../node_modules/@six/ui-library/dist/ui-library')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${server.address().port}`);
});
