const content = require('./content.ejs');
const layout = require('layout2');

module.exports = layout.init({
  pageTitle: '55555',
}).run(content());
