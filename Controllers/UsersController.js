const User = require('../Model/User')
const bcrypt = require('bcrypt')

const findAllUsers = async (req, res) => {
  const user = await User.find().lean()
  if (!user?.length) {
    return res.status(400).json({ message: 'No users found' })
  }
  res.json(user)
}

const CreateUser = async (req, res) => {
  const { username, password, roles, active } = req.body
  if (!username || !password)
    return res.status(404).send('username and passowrd are required')
  const duplicate = await User.findOne({ username }).exec()
  if (duplicate) return res.status(409).json({ message: 'duplicate username' })
  const hashedPwd = await bcrypt.hash(password, 10)
  const newUser =
    !Array.isArray(roles) || !roles.length
      ? { username, password: hashedPwd, active }
      : { username, password: hashedPwd, active, roles }
  await User.create(newUser)
  res.status(201).json({ message: `sucess,username ${username} created` })
}

const UpdateUser = async (req, res) => {
  const { id, username, roles, active, password } = req.body

  // Confirm data
  if (
    !id ||
    !username ||
    !Array.isArray(roles) ||
    !roles.length ||
    typeof active !== 'boolean'
  ) {
    return res
      .status(400)
      .json({ message: 'All fields except password are required' })
  }

  // Does the user exist to update?
  const user = await User.findById(id).exec()

  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  }

  // Check for duplicate
  const duplicate = await User.findOne({ username })
    .collation({ locale: 'en', strength: 2 })
    .lean()
    .exec()

  // Allow updates to the original user
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: 'Duplicate username' })
  }

  user.username = username
  user.roles = roles
  user.active = active

  if (password) {
    // Hash password
    user.password = await bcrypt.hash(password, 10) // salt rounds
  }

  const updatedUser = await user.save()

  res.json({ message: `${updatedUser.username} updated` })
}

const deleteUser = async (req, res) => {
  const { id } = req.body
  const user = await User.findById(id).exec()
  if (!user) return res.status(403).json({ message: 'forbidden,no user exist' })
  await user.deleteOne()
  const message = ` ${user.username} was deleted sucessfully`
  res.json(message)
}

module.exports = {
  findAllUsers,
  CreateUser,
  UpdateUser,
  deleteUser,
}
