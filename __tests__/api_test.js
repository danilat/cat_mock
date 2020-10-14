const app = require('./../app')
const supertest = require('supertest')
const request = supertest(app)

it('Gets the hello world endpoint', async done => {
    const response = await request.get('/')
    
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('running')
    done()
})

it('Post a new cat', async done => {
    payload = {name: 'angry cat' ,
               url: 'https://i.pinimg.com/originals/2f/89/07/2f89076e6091bd0a4d7985a52a3bf504.gif'}
    const response = await request.post('/cats').send(payload)
    
    expect(response.status).toBe(200)
    expect(response.body.name).toBe(payload['name'])
    expect(response.body.url).toBe(payload['url'])
    expect(response.body.howMany).toBe(1)
    done()
})