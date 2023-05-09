const mongoose = require('mongoose');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const ApplicationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name for your app'],
      unique: true,
      trim: true,
      maxlength: [50, 'Name can not be more than 50 characters']
    },
    description: {
      type: String,
      maxlength: [500, 'Description can not be more than 500 characters']
    },
    appKey: String,
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }
);

ApplicationSchema.pre('save', async function(next) {
  const appKey = crypto.randomUUID()
  const salt = await bcrypt.genSalt(10);
  this.appKey = await bcrypt.hash(appKey, salt);
});

module.exports = mongoose.model('Application', ApplicationSchema);