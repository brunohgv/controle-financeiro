const express = require('express')

const router = express.Router()

const TransactionsController = require('../controllers/transactionsController')

router.get('', TransactionsController.getAll)
router.post('', TransactionsController.saveTransaction)

module.exports = router