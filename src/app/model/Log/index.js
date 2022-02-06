import mongoose from "../../../database";

const LogSchema = new mongoose.Schema({
    app: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    input: {
        type: String,
    },
    output: {
        type: String,
    },
    message: {
        type: String,
    }
}, {
    timestamps: true
})

const Log = mongoose.model('Log', LogSchema);

export default Log;