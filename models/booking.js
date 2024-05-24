const mongoose = require("mongoose");

const bookingschema = new mongoose.Schema({
    publish: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'publishes'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userregistrations'
    },
    pickup_point: String,
    drop_point: String,
    goods_type: String,
    goods_weight: Number,
    status: {
        type: Number,
        default: 0
    }
});


bookingschema.pre('remove', async function(next) {
    try {
        
        await mongoose.model('userregistrations').updateMany(
            { bookings: this._id },
            { $pull: { bookings: this._id } }
        );
    
        await mongoose.model('publishersignups').updateMany(
            { booking: this._id },
            { $pull: { booking: this._id } }
        );
        next();
    } catch (error) {
        next(error);
    }
});

const booking = mongoose.model("bookings", bookingschema);

module.exports = booking;
