const app = require('./../app')
const supertest = require('supertest')
const request = supertest(app)

it('Gets the hello world endpoint', async done => {
    const response = await request.get('/')
    
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('running')
    done()
  })