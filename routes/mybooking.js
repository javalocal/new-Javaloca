
   
const express = require('express')

const router = express.Router()
router.get(('/mybooking'), (req, res) => {
    res.render('pages/mybooking')
})



module.exports = router;