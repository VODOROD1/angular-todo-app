const express = require("express")
const orderController = require("../controllers/orderController")

const router = express.Router()

// localhost:5000/api/order
router.get('/', orderController.getAll)

// localhost:500/api/order
router.post('/', orderController.create)

module.exports = router