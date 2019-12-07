const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
mongoose.promise = Promise

// Define userSchema
const userSchema = new Schema({
    email: { type: String, unique: false },
    firstName: { type: String, unique: false },
    lastName: { type: String, unique: false },
    userName: { type: String, unique: true },
    password: { type: String, unique: false },
    address1: { type: String, unique: false },
    address2: { type: String, unique: false },
    city: { type: String },
    stateProvince: { type: String },
    zip: { type: String, unique: false }

})

// Define schema methods
userSchema.methods = {
    checkPassword: function (inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
    }
}

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
    if (!this.password) {
        console.log('=======NO PASSWORD PROVIDED=======')
        next()
    } else {
        this.password = this.hashPassword(this.password)
        next()
    }

})

// Create reference to User & export
const User = mongoose.model('User', userSchema)
module.exports = User