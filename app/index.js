const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json([{
    name: 'Fuck you',
    email: 'Nigga@gmail.com'
},
{
  name: 'Yasha',
  email: 'LiveYasha@gmail.com'
},
{
  name: 'Mina',
  email: 'LiveYashaMina@gmail.com'
}
]))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})