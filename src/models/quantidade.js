import mongoose from 'mongoose';

const qtdSchema = new mongoose.Schema({
  qtd: {
    type: Number,
    required: true,
  },
  dateTime: {
    type: Date,
    default: Date.now,
  },
});

const Qtd = mongoose.model('Quantidade', qtdSchema);

export default Qtd;
