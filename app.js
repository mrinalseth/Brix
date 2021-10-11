const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')

const users = require('./routes/api/users')
const posts = require('./routes/api/posts')


// ------------------------------------

const app = express()


app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

// ------------------------------------------
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db,{ useUnifiedTopology: true,useNewUrlParser: true,useFindAndModify:false })
    .then(()=>{console.log('DATABASE CONNECTED')})
    .catch(()=>{console.log(`DATABASE ERROR -----> ${err}`)})
//Passport Authentication----------------------
app.use(passport.initialize());
require('./config/passport.js')(passport)



// -------------------------------------------------

app.use('/api/user', users)
app.use('/api/post', posts)

// ------------------------------------------------

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    app.get('*',(req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')) 
    })
}

const port = process.env.PORt||5000
app.listen(port, () => {
    console.log(`server started on PORT ${port}`)
})