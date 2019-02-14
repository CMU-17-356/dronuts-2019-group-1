const models = require('../src/models')
const Joi = require('joi')

test('creating a user', () => {
  const result = Joi.validate({ user_id: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', username: 'testusername', full_name: 'Jonathan Fung', password: 'password' }, models.user)
  expect(result.error).toBe(null)
});

test('creating a donut', () => {
  const result = Joi.validate({ donut_id: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', donut_name: 'Glazed Donut', ingredients: ['sugar', 'flour'], price: 1.00 }, models.donut)
  expect(result.error).toBe(null)
});


test('creating a customer', () => {
  const result = Joi.validate({ customer_id: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', user_id: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', address: '111 three street' }, models.customer)
  expect(result.error).toBe(null)
});


test('creating a employee', () => {
  const result = Joi.validate({ employee_id: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', user_id: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', position: 'Manager' }, models.employee)
  expect(result.error).toBe(null)
});


test('creating a order', () => {
  const result = Joi.validate({ order_id: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', employee_id: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', customer_id: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', drone_id: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', time: '2019-02-11T10:10' }, models.order)
  expect(result.error).toBe(null)
});


test('creating a drone', () => {
  const result = Joi.validate({ drone_id: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', drone_name: 'Drone 1', drone_model: 'T1000', drone_location: 'a place' }, models.drone)
  expect(result.error).toBe(null)
});

test('creating a donut_list', () => {
  const result = Joi.validate({ donut_list_id: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', donut_id: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', order_id: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000' }, models.donut_list)
  expect(result.error).toBe(null)
});