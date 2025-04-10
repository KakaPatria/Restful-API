const { body } = require('express-validator');

exports.validateArticle = [
  body('title').notEmpty().withMessage('Title is required'),
  body('content').notEmpty().withMessage('Content is required'),
  body('author').notEmpty().withMessage('Author is required'),
  body('category_id').isMongoId().withMessage('Valid category_id is required')
];