const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    // TODO: create username field
    username: {
      type: String,
      required: true,
      unique: true
    },

    // TODO: create email field
    email: {
      type: String,
      required: "Email is required",
      unique: true,
      match: /^([a-zA-Z\d_\.-]+)@([\da-zA-Z\.-]+)\\\.([a-z\.]{2,6})$/
    },
    
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
