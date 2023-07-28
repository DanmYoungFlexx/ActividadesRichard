import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        require : true,
        trim : true,
    },
    email : {
        type : String,
        unique : true,
        require : true,
        trim: true
    },
    password: {
        type : String,
        minlength:[6,"La contraseñan debe tener minimo 6 caracteres"],
        require: true
    }
},{
    timestamps: true
});

export default mongoose.model("User", userSchema);