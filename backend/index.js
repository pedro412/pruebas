const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
const port = 4000;

const api = 'https://pokeapi.co/api/v2/pokemon';

app.use(cors());

app.get('/api/v1/pokemon/:name', async (req, res, next) => {
  try {
    const result = await fetch(`${api}/${req.params.name}`);
    const data = await result.json();

    const { name, id } = data;
    const image = data.sprites.back_default;

    res.status(200).json({
      message: 'ok',
      pokemon: {
        id,
        name,
        image,
      },
    });
  } catch (err) {
    res.status(404).json({
      message: 'not found',
      error: err,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
