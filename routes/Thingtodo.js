
   
const express = require('express')

const router = express.Router()

router.get(('/'), (req, res) => {
    res.render('pages/Thingtodo');
})

router.get(('/vacation1'), async (req, res) => {
    res.render('pages/vacation1');
})




module.exports = router;