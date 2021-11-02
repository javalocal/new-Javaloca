
   
const express = require('express')

const router = express.Router()
router.get(('/Faq'), (req, res) => {
    res.render('pages/Faq')
})



module.exports = router;