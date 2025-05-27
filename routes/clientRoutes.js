const express = require('express');
const router = express.Router();
const { verifyToken, checkRole } = require('../middleware/auth');
const {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient
} = require('../controllers/clientController');

// All routes require authentication
router.use(verifyToken);

// Routes
router.get('/', getAllClients);
router.get('/:id', getClientById);
router.post('/', createClient);
router.put('/:id', updateClient);
router.delete('/:id', deleteClient);

module.exports = router;