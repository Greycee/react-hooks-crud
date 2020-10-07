const express = require('express')
const { uuid } = require('uuidv4')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const userList = [
  {
    id: 'ac3be0b7-a9ef-40be-9201-075bff0dbc36',
    username: 'AddMeAsAFriend',
    email: 'markzuckerberg@facebook.com',
  },
  {
    id: '480e71c6-cec7-4659-9caa-bbd517d0afb1',
    username: 'SeeBillThroughTheWindow',
    email: 'billgates@microsoft.com',
  },
  {
    id: '700c4bb9-0fec-46e6-a1ef-16ebec0a3258',
    username: 'JobsEatsApple',
    email: 'stevejobs@apple.com',
  },
]

app.get('/users', (_, res) => {
  return res.json(userList)
})

app.post('/users', (req, res) => {
  const { username, email } = req.body
  const user = { id: uuid(), username, email }
  userList.push(user)
  return res.json(user)
})

app.put('/users/:id', (req, res) => {
  const { id } = req.params
  const { username, email } = req.body
  const userIndex = userList.findIndex((user) => user.id == id)

  if (userIndex < 0) {
    return res.status(400).json({ error: 'user not found.' })
  }

  const user = { id, username, email }
  userList[userIndex] = user

  return res.json(user)
})

app.delete('/users/:id', (req, res) => {
  const { id } = req.params
  const findUserIndex = userList.findIndex((user) => user.id == id)

  if (findUserIndex >= 0) {
    userList.splice(findUserIndex, 1)
  }

  return res.status(204).send()
})

app.listen(3030, () => {
  console.log('🚀 Back-end is connected on port 3030')
})
