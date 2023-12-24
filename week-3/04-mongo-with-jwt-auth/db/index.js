const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://shzaheer514:zaheer514@cluster0.jgq64hk.mongodb.net/UdemyJWT');
const ObjectId = mongoose.Types.ObjectId;

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String

});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username :String,
    password :String,
    purchased :[]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:String,
    description:String,
    price:Number,
    imageLink:String,
    published:Boolean,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course,
    ObjectId
}