const express = require('express') ;
const app = express() ;
const cors = require('cors');
const port = process.env.PORT || 5000 ;

// middleware
app.use(cors()) ; 
app.use(express.json()) ;

const users = [
    {id:1, name:"Sabana", email: "sabana@mail.com"},
    {id:2, name:"Sabila", email: "sabila@mail.com"},
    {id:3, name:"Sorna", email: "sorna@mail.com"}
]

app.get('/', (req, res) => {
    res.send("users management server running") ;
})

app.get('/users', (req, res) => {
    res.send(users) ;
})

app.post('/users', (req, res) => {
    console.log(req.body) ;
    const newUser = req.body ;
    newUser.id = users.length + 1 ;
    users.push(newUser) ;
    res.send(newUser) ;
})

app.listen(port, () => {
    console.log(`Server running at port : ${port}`) ;
})