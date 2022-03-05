const mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost:27017/nosql');

module.exports = mongoose.connection