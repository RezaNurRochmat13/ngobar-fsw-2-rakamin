const db = require('./../models')
const { QueryTypes } = require('sequelize');
const express = require('express')
const router = express.Router()


router.get('/api/films', async (request, response) => {
  const films = await db.sequelize.query('SELECT * FROM film', { type: QueryTypes.SELECT });


  return response.json({data: films})
})

router.get('/api/films/:id', async (request, response) => {
  const films = await db.sequelize.query('SELECT * FROM film WHERE film_id = :film_id', {
    replacements: { film_id: request.params.id }, type: QueryTypes.SELECT });

    if (films.length === 0) {
      return response.status(404).json({message: 'Film not found'})
    }

  return response.json({data: films})
})

module.exports = router