import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        requried: true
    },
    username: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }
})


let User = models?.User || model("User", userSchema);
export default User;