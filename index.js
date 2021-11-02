const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = express()

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(session({
    secret: 'som3_s3cret_k3ys',
    cookie: {}
}))

app.use( (req, res, next) => {
    res.locals.isLoggedIn = req.session.isLoggedIn;
    next();
})

mongoose.connect(('mongodb+srv://kelas_A:Uaba7KLoO0BqO7xn@cluster0.imabx.mongodb.net/dazzled_a?retryWrites=true&w=majority'), (err, res) => {
    if (err) {
        console.error(err);
    }
    else {
        console.log('Database terhubung!')
    }
})

const indexRouter = require('./routes/index');
const accountRouter = require('./routes/account');
const ThingtodoRouter = require('./routes/Thingtodo');

app.use('/', indexRouter);
app.use('/account', accountRouter);
app.use('/Thingtodo',ThingtodoRouter);

app.listen('3000', ()=> {
    console.log('Server sudah berjalan di port 3000')
})