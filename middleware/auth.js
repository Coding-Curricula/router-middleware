
const bcrypt = require('bcrypt')

let users = [];

// function to create a new user
const createUser = async (username, password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = {
            id: users.length + 1,
            username,
            password: password,
            dateCreated: new Date().toISOString()
        }

        users.push(newUser)
    } catch (error) {
        console.log(error)
    }
}

// create one iniitial user
createUser('user1', 'password1')


// auth middleware
const auth = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const user = users.find(user => user.username === username)

        if (!user) {
            throw Error('User not found')
        }

        const validPassword = await bcrypt.compare(password, user.password)

        if (!validPassword) {
            throw Error('Password not valid')
        }

        next()
    } catch (error) {
        res.status(401).json({
            success: false,
            error: error.message
        })
    }
}

module.exports = auth