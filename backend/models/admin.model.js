import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    userName:{
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [ 5, 'Email must be at least 5 characters long' ],
        match: [ /^\S+@\S+\.\S+$/, 'Please enter a valid email' ],
        lowercase: true,
    },
    password:{
        type: String,
        require: true,
        minlength: [ 6, 'Password must be at least 6 characters long' ],}
})

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;