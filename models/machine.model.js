const mongoose = require("mongoose");

const machineSchema = mongoose.Schema(
    {
        machineNo: {
            type: Number,
            required: true,
          
        },
        make: {
            type: String,
            required: true,
        },
        serialNo: {
            type: String,
            required: true,
        },
        connectedTank: {
            type: Number,
            required: true,
        },
        product: {
            type: String,
            required: true,
        },
        nozzlesInMPD: {
            type: Number,
            required: true, 
        },
        sides: {
            type: Array,
            required: true,
            default:[],
        },
        nozzleLayout: {
            type: Array,
            required: true,
            default: [],
        },
    },
    
    {
        timestamps: true,
    },
    // {
    //     versionKey: false,
    // }
);

const Machine= mongoose.model("Machine",machineSchema)

module.exports = {
    Machine
}
