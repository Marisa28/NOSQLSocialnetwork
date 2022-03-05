const mongoose = require("mongoose");
// require reaction schema 
const reactionSchema = require("./Reaction")
const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "Enter a thoughttext",
      minLength: 1,
      maxLength: 280,
    },
    username: {
      type: String,
      required: "Enter username"
    },
    createdAt: {
      type: Date,
      default: Date.now
      // add getter 
    },
    // reaction array passing in reaction schema 
    reactions: [reactionSchema]

  },

  opts

);
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});
const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;

