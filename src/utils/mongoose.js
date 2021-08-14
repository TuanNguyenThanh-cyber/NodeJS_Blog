module.exports = {
  mutipleMongooseToObject: function (mongoosesArray) {
    return mongoosesArray.map((mongooseArray) => mongooseArray.toObject());
  },
  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
