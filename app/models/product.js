const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  lastName: {type:String, required: true},
  firstName: {type:String, required: true}
});

module.exports = mongoose.model('Product', productSchema)
