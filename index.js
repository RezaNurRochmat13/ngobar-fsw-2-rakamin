const express = require('express');
const app = express();
const PORT = 8081 || process.env.PORT;
const filmController = require('./controller/film.controller')
const categoryController = require('./controller/category.controller')

// Include the controller as middleware
app.use(filmController)
app.use(categoryController)

app.get('/ping', (req, res) => {
  res.json({ping: true})
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
