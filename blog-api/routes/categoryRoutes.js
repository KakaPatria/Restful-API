const express = require('express');
const router = express.Router();
const { createCategory, getCategories } = require('../controllers/categoryController');
const { validateCategory } = require('../validators/categoryValidator');
const { validationResult } = require('express-validator');

router.post('/', validateCategory, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}, createCategory);

router.get('/', getCategories);

module.exports = router;