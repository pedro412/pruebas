const request = require('supertest');
const app = require('./index');

describe('GET /pokemon/ditto', function () {
  it('responds with pokemon', function (done) {
    request(app)
      .get('/api/v1/pokemon/ditto')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        200,
        {
          message: 'ok',
          pokemon: {
            id: 132,
            name: 'ditto',
            image:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png',
          },
        },
        done
      );
  });
});
