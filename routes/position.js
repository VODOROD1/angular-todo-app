const express = require("express")
const positionController = require("../controllers/positionController")

const router = express.Router()

// localhost:5000/api/position/:category
router.get('/:categoryId', positionController.getByCategoryId)

// localhost:500/api/position
router.post('/', positionController.create)

// localhost:5000/api/position/:id
router.patch('/:id', positionController.update)

// localhost:500/api/position/:id
router.delete('/:id', positionController.remove)

module.exports = router