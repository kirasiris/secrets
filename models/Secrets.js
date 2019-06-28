const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SecretSchema = new Schema({
  age: {
    type: Number,
    min: 0,
    max: 100,
    required: true
  },
  sex: {
    type: String
  },
  text: {
    type: String,
    required: true
  },
  nsfw: {
    type: String
  },
  likes: [
    {
      type: Number,
      required: true
    }
  ],
  comments: [
    {
      age: {
        type: Number,
        min: 0,
        max: 100,
        required: true
      },
      sex: {
        type: String
      },
      text: {
        type: String,
        required: true
      },
      likes: [
        {
          type: Number,
          required: true
        }
      ],
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Secret = mongoose.model('Secret', SecretSchema);
