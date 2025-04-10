const express = require('express');
const router = express.Router();
const {
  createArticle, getArticles, getArticleById,
  updateArticle, deleteArticle, searchArticles
} = require('../controllers/articleController');
const { validateArticle } = require('../validators/articleValidator');
const { validationResult } = require('express-validator');

router.post('/', validateArticle, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}, createArticle);

router.get('/', getArticles);
router.get('/search', searchArticles);
router.get('/:id', getArticleById);
router.put('/:id', updateArticle);
router.delete('/:id', deleteArticle);

module.exports = router;