require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const { User } = require('./models/User')


var loginRouter = require('./routes/login');


const app = express();

const port = process.env.PORT || 4500;

const cors = require('cors');
app.use(cors());

app.use(express.static('public'));

app.use(bodyParser.urlencoded( {extended : true}));

app.use(bodyParser.json());


app.use('/api/login', loginRouter);



mongoose.Promise = global.Promise

mongoose.connect(process.env.MONODB_URI)
.then(()=> console.log('Successfully connected to mongodb'))
.catch(e => console.error(e));

app.post('/register' , (req,res) =>{
    const user = new User(req.body)

    user.save((error, userInfo) => {
        if(error) return res.json({success: false , error})

        return res.status(200).json({
            success : true
        })
    })
})

app.get('/', (req,res) => res.send('Develog!'))


app.listen(port , ()  => console.log(`Server is listening port ${port}`))


