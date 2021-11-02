
   
const express = require('express')

const router = express.Router()
router.get(('/Hotelbooking'), (req, res) => {
    res.render('pages/Hotelbooking')
})



module.exports = router;