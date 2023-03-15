const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bmiSchema = new Schema({
    weight: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


const Bmi = mongoose.model('Bmi', bmiSchema);

module.exports = Bmi;