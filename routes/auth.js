const express = require("express")

const router = express.Router()

router.get('/login', (req, res) => {
    res.json({
        login: true
    })
    console.log("LOGIN!!!")
})

module.exports = router
