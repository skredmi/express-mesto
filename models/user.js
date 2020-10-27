const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /https?:\/\/(w{3,3}\.)?\S+\.([a-z]{2,3})\S*/.test(v);
      },
      message: 'Необходимо ввести верный url',
    },
  },
});

module.exports = mongoose.model('user', userSchema);
