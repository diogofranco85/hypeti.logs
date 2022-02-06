import mongoose from "../../../database";

const ApiSchema = new mongoose.Schema({
    app: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    key: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
}, {
    timestamps: true
})

const Api = mongoose.model('Api', ApiSchema);

export default Api;