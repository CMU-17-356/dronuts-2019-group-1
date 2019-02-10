const request = require('supertest')
const app = require('../app')

describe('homepage', () => {
  it("welcomes the user", () => {
    return request(app).get('/').expect(200);

  })

})

