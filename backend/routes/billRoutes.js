const express = require('express');
const { createBill, getAllBills } = require('../controllers/billController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, createBill);
router.get('/', auth, getAllBills);

module.exports = router;

