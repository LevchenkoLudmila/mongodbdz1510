const mongoose = require('mongoose');
const { Schema } = mongoose;

const generalSchema = new Schema({
   name: { 
      type: Schema.Types.String,
      minLength: 2,
   },
   year: { 
      type: Schema.Types.Number,
      minLength: 4,
   }
});

const model = mongoose.model('book', generalSchema);
module.exports = model;