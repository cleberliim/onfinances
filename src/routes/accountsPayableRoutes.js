const express = require('express');
const accountsReceivableController = require('../controllers/accountsReceivableController');

const router = express.Router();

router.get('/', accountsReceivableController.getAllAccounts);
router.get('/:id', accountsReceivableController.getAccountById);
router.post('/', accountsReceivableController.createAccount);
router.put('/:id', accountsReceivableController.updateAccount);
router.delete('/:id', accountsReceivableController.deleteAccount);

module.exports = router;