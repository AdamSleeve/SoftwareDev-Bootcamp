const express = require('express');
const router = express.Router();

let items = [];
let idCounter = 1;

// GET /items - List all items
router.get('/', (req, res) => {
  res.json(items);
});

// GET /items/:id - Get item by ID
router.get('/:id', (req, res, next) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) {
    const err = new Error('Item not found');
    err.status = 404;
    return next(err);
  }
  res.json(item);
});

// POST /items - Create a new item
router.post('/', (req, res, next) => {
  const { name, description } = req.body;
  if (!name || !description) {
    const err = new Error('Name and description are required');
    err.status = 400;
    return next(err);
  }
  const newItem = { id: idCounter++, name, description };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT /items/:id - Update an existing item
router.put('/:id', (req, res, next) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) {
    const err = new Error('Item not found');
    err.status = 404;
    return next(err);
  }

  const { name, description } = req.body;
  if (!name || !description) {
    const err = new Error('Name and description are required');
    err.status = 400;
    return next(err);
  }

  item.name = name;
  item.description = description;
  res.json(item);
});

// DELETE /items/:id - Delete an item
router.delete('/:id', (req, res, next) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) {
    const err = new Error('Item not found');
    err.status = 404;
    return next(err);
  }
  items.splice(index, 1);
  res.status(204).end();
});

module.exports = router;
