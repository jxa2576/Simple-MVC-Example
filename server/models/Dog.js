const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

let DogModel = {};

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  breed: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    min: 0,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

DogSchema.statics.findByName = (name, callback) => {
  const search = {
    name,
  };

  return DogModel.findOne(search, callback);
};

DogSchema.statics.findByNameAndUpdate = (name, newAge, callback) => {
  const search = {
    name,
  };

  return DogModel.findOneAndUpdate(search, { age: newAge }, callback);
};

DogModel = mongoose.model('Dog', DogSchema);

module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;
