const db = require('./../models')
const { QueryTypes } = require('sequelize');
const express = require('express')
const router = express.Router()


router.get('/api/categories', async (request, response) => {
  const categories = await db.sequelize.query('SELECT * FROM category', { type: QueryTypes.SELECT });


  return response.json({data: categories})
})

module.exports = router