const express = require('express');
const app = express();
const port = 7000;

app.use(express.json());


// Load database
const products = require('./database.json');


// GET all products
app.get('/products', (req, res) => {
  res.json(products);
});

// GET product by ID
app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});

// DELETE product by ID
app.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const index = products.findIndex((p) => p.id === productId);

  if (index === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  products.splice(index, 1);
  res.status(204).send(); // No content response
});

// POST to add a new product
app.post('/products', (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT to update a product by ID
app.put('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const updatedProduct = req.body;
  const index = products.findIndex((p) => p.id === productId);

  if (index === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  products[index] = { ...products[index], ...updatedProduct };
  res.json(products[index]);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

