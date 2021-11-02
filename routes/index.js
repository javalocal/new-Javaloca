
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('pages/index')
})

router.get(('/Thingtodo'), (req, res) => {
    res.render('pages/Thingtodo');
})

router.get(('/vacation1'), async (req, res) => {
    res.render('pages/vacation1');
})

router.get(('/vacation2'), async (req, res) => {
    res.render('pages/vacation2');
})
router.get(('/vacation3'), async (req, res) => {
    res.render('pages/vacation3');
})
router.get(('/vacation4'), async (req, res) => {
    res.render('pages/vacation4');
})
router.get(('/vacation5'), async (req, res) => {
    res.render('pages/vacation5');
})
router.get(('/vacation6'), async (req, res) => {
    res.render('pages/vacation6');
})
router.get(('/vacation7'), async (req, res) => {
    res.render('pages/vacation7');
})

module.exports = router;