const models = require('../models')
const Joi = require('joi')

test('creating a user', () => {
	const result =  Joi.validate({user_id: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', username: 'testusername', full_name: 'Jonathan Fung', password: 'password'})
	expect(result.error).toBe(null)
});