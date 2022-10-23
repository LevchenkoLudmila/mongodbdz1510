const mongoose = require('mongoose');
const { Schema } = mongoose;

const generalSchema = new Schema({
   name: { 
      type: Schema.Types.String,
      minLength: 2,
   },
   surname: { 
      type: Schema.Types.String,
      minLength: 2,
   },
});

const model = mongoose.model('autor', generalSchema);
module.exports = model;