const express = require('express')
const router = express.Router()

router.get('/plane', (req, res) => {
    res.render('pages/plane')
})

module.exports = router;