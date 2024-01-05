const express = require('express')

const router = express.Router()

// GET all blogs
router.get('/', (req, res) => {
  res.json({ message: 'GET all blogs' })
})

// GET a single blog
router.get('/:id', (req, res) => {
  res.json({ message: 'GET a single blog' })
})

// POST a new blog
router.post('/', (req, res) => {
  res.json({ message: 'POST a new blog' })
})

// DELETE a new blog
router.delete('/:id', (req, res) => {
  res.json({ message: 'DELETE a blog' })
})

// UPDATE a new blog
router.patch('/:id', (req, res) => {
  res.json({ message: 'UPDATE a blog' })
})

module.exports = router
