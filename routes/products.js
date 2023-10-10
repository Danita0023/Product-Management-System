const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/Product');

// GET all products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

//Get product by ID
router.get('/:id', async (req, res, next) => {
  try {
      const product = await Product.findById(req.params.id);
      res.json(product);
  } catch (err) {
      next(err);
  }
});


// POST a new product
router.post('/', async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (err) {
    next(err);
  }
});

//Edit existing product
router.put('/:id', async (req, res, next) => {
  try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(product);
  } catch (err) {
      next(err);
  }
});

//Delete product from ID
router.delete('/:id', async (req, res, next) => {
  try {
      const product = await Product.findByIdAndDelete(req.params.id);
      res.json(product);
  } catch (err) {
      next(err);
  }
});

module.exports = router;
