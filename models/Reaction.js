const {Schema,Types,model} = require("mongoose");
// require reaction schema 
const dateFormat=require("../utils/dateFormat")

const opts = { toJSON: { getters:true }, id:false};

const reactionSchema = new Schema(
  {
    reactionBody: {
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
      default: Date.now,
      get: (date) => dateFormat(date)
      
     
    },
    reactionID: {
        type: Types.ObjectId,
        default: () => new Types.ObjectId
        
      },
  },

  opts

);

module.exports = reactionSchema;

