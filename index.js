const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose')

const app = express()

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(session({
    secret: 'som3_secre3t_keys',
    cookie: {}
}))


mongoose.connect(('mongodb+srv://admin:12345@javaloca.wdxsx.mongodb.net/javaloca?retryWrites=true&w=majority'), (err, res) => {
    if (err) {
        console.error(err);
    }
    else {
        console.log('Database terhubung!')
    }
})

app.use((req, res, next) => {
    res.locals.isLoggedIn = req.session.isLoggedIn;
    next();
})

const indexRouter = require('./routes/index');
const accountRouter = require('./routes/account');
const ThingtodoRouter = require('./routes/Thingtodo');
const transprtRouter =require('./routes/transport');
const promoRouter= require('./routes/promo');

app.use('/', indexRouter);
app.use('/account', accountRouter);
app.use('/Thingtodo',ThingtodoRouter);
app.use('/transport', transprtRouter);
app.use('/promo', promoRouter);

app.listen('3000', ()=> {
    console.log('Server sudah berjalan di port 3000')
})