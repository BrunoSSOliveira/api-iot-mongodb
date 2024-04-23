import mongoose from 'mongoose';

const tempSchema = new mongoose.Schema({
  temp: {
    type: Number,
    required: true,
  },
  dateTime: {
    type: Date,
    default: Date.now,
  },
});

const Temp = mongoose.model('Temp', tempSchema);

export default Temp;
