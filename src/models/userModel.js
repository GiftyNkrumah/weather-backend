const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username,
    email, 
    password
})



userSchema.set('toJSON', {
    transform: (doc, user) => {
        user.id = user._id.toString()
        delete user._id
        delete user.__v
        delete user.password
    }
})

userSchema.pre('save')

const User = mongoose.model('User', userSchema)