const { Schema, model } = require("mongoose");

const activitySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    location: { type: String },
    price: { type: Number },
    organizer: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    savedByUsers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    usersGoing:[
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

activitySchema.index({
  name: "text",
  location: "text",
});

const Activity = model("Activity", activitySchema);
module.exports = Activity;
