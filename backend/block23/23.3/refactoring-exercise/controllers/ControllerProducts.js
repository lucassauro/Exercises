const express = require('express');
const ProductModel = require('../models/ModelProducts');
const { validate } = require('./Middlewares');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const products = await ProductModel.getAll();
  res.status(200).json(products);
});

router.get('/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);
  if (product.error) return next(product.error);
  res.status(200).json(product);
});

router.post('/', validate, async (req, res) => {
  const { name, brand } = req.body;
  const product = await ProductModel.add(name, brand);
  res.status(201).json(product);
});

router.put('/:id', validate, async (req, res) => {
  const { name, brand } = req.body;
  const product = await ProductModel.updater(req.params.id, name, brand);
  if (product.error) return next(product.error);
  res.status(200).json(product);
});

router.delete('/:id', async (req, res) => {
  const product = await ProductModel.deleter(req.params.id);
  if (product.error) return next(product.error);
  res.status(204).end();
});

module.exports = router;