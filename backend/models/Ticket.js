const mongoose = require("mongoose");


const ticketSchema = new mongoose.Schema({

    ticketId: {
        type: String,
        unique: true
    },

    customerName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: ["Open", "In Progress", "Closed"],
        default: "Open"
    },

    comments: [
        {
            text: String,
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ]

},
{
    timestamps:true
});


module.exports = mongoose.model("Ticket", ticketSchema);