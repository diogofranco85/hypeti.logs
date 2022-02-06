import bcrypt from "bcryptjs";
import mongoose from "../../../database";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
}, {
    timestamps: true
})

UserSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
})

const User = mongoose.model('User', UserSchema);

export default User;