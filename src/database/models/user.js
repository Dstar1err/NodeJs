import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    deletedAt: {
        type: Date,
        required: false
    }
})

UserSchema.methods.IsDeleted = function() {
    if (this.deletedAt !== undefined) {
        return true
    }
    return false
}

export const User = mongoose.model("User", UserSchema)