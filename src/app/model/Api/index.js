import mongoose from "../../index";

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
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Api = mongoose.model('Api', ApiSchema);

export default Api;