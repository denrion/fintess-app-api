const mongoose = require('mongoose');
const sanitizeMongooseFields = require('../../utils/mongoose/sanitizeMongooseFields');
const ExerciseGroup = require('../../constants/ExerciseGroups');

const ExerciseSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: [true, 'Description field is required'],
    },
    group: {
      type: String,
      enum: Object.values(ExerciseGroup),
    },
    title: {
      type: String,
      required: [true, 'Title field is required'],
    },
    videoURL: {
      type: String,
      required: [true, 'Video url is required'],
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
  }
);

// ************************ VIRTUALS ************************ //

// ******************* DOCUMENT MIDDLEWARE ****************** //

// ******************** QUERY MIDDLEWARE ******************* //

// **************** AGGREGATION MIDDLEWARE **************** //

// ******************* INSTANCE METHONDS ******************* //

// ******************** STATIC METHODS ******************** //

// ************************ PLUGINS *********************** //

ExerciseSchema.plugin(sanitizeMongooseFields);

module.exports = ExerciseSchema;
