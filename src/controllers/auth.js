const User = require('../models/userModel')

const signup = async (request, response) => {
    const { firstName, lastName, email, password } = request.body
    const user = User({firstName, lastName, email, password})
    
    try {
        const newUser = await user.save()
        response.send({
            message: "User created successfully",
            newUser
        })
    } catch(exception) {
        response.status(500).send(error="email already used")
    }
}

module.exports = signup