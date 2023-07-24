const mongoose = require('mongoose')
// const AutoIncrement = require('mongoose-sequence')(mongoose)

const FeedsSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      default: Date.now(),
    },
    student_name: String,
    Received_From: String,
    The_Sum_Of: String,
    Being: String,
    GHC: Number,
    Balance: Number,
    Signature: String,
    Receipt_Cheque_No: Number,
  },
  {
    timestamps: true,
  }
)

// FeedsSchema.plugin(AutoIncrement, {
//   inc_field: 'Receipt_Cheque_No',
//   // start_seq: 1,
// })
module.exports = mongoose.model('Fee', FeedsSchema)
