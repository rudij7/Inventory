const mongoose = require('mongoose');

const Item = mongoose.model('Item', new mongoose.Schema({
    Item_name: {
        type: String,
        required: true
    },
    id_user: [{
        type: String
    }],
    last_updated_date: {
        type: Date,
        required: true
    },
    expiry_date: {
        type: Date
    },
    Item_description: {
        type: String
    },
    quantity: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    }
}));

module.exports = Item;