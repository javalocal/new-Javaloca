
   
const express = require('express')

const router = express.Router()
router.get(('/Villa'), (req, res) => {
    res.render('pages/Villa')
})



module.exports = router;