const express = require("express")
const categoryController = require("../controllers/categoryController")

const router = express.Router()

// localhost:5000/api/category/getAll
router.get('/', categoryController.getAll)

// localhost:500/api/category/:id
router.get('/:id', categoryController.getById)

// localhost:5000/api/category
router.post('/', categoryController.create)

// localhost:500/api/category/:id
router.patch('/:id', categoryController.update)

// localhost:500/api/category/:id
router.delete('/:id', categoryController.removeById)

module.exports = router