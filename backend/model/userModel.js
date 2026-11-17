import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        // Only email/password accounts have a password. Google accounts never do.
        password: {
            type: String,
            required: function () {
                return this.authProvider === "local";
            },
        },
        // How the account was created. Existing users without this field count as "local".
        authProvider: {
            type: String,
            enum: ["local", "google"],
            default: "local",
        },

        cartData: {
            type: Object,
            default: {},
        },
    },
    {
        timestamps: true,
        minimize: false,
    }
);

const User = mongoose.model("User", userSchema);
export default User;
