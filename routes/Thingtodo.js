
   
const express = require('express')

const router = express.Router()
router.get(('/Thingtodo'), (req, res) => {
    res.render('pages/Thingtodo')
})



module.exports = router;