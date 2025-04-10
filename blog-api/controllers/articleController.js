const Article = require('../models/Article');
const Category = require('../models/Category');

exports.createArticle = async (req, res) => {
  try {
    const { title, content, author, category_id } = req.body;
    const category = await Category.findById(category_id);
    if (!category) return res.status(400).json({ error: "Invalid category." });

    const article = new Article({ title, content, author, category_id });
    await article.save();
    res.status(201).json(article);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getArticles = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const articles = await Article.find()
    .populate('category_id', 'name')
    .skip(skip)
    .limit(limit);
  res.json(articles);
};

exports.getArticleById = async (req, res) => {
  const article = await Article.findById(req.params.id).populate('category_id', 'name');
  if (!article) return res.status(404).json({ error: 'Article not found' });
  res.json(article);
};

exports.updateArticle = async (req, res) => {
  const updated = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ error: 'Article not found' });
  res.json(updated);
};

exports.deleteArticle = async (req, res) => {
  const deleted = await Article.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'Article not found' });
  res.json({ message: 'Article deleted' });
};

exports.searchArticles = async (req, res) => {
  const { category_id, keyword } = req.query;
  const filter = {};
  if (category_id) filter.category_id = category_id;
  if (keyword) filter.title = { $regex: keyword, $options: 'i' };

  const result = await Article.find(filter).populate('category_id', 'name');
  res.json(result);
};