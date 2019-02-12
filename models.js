const Joi = require('joi');

const generalID = Joi.string().guid({version: 'uuidv4'});

const user = Joi.object().keys({
  user_id: generalID.required(),
  username: Joi.string().required(),
  full_name: Joi.string().required(),
  password: Joi.string().required(),
  phone_number: Joi.number().integer(),
  email: Joi.string()
});

const customer = Joi.object().keys({
  customer_id: generalID.required(),
  user_id: generalID.required(),
  address: Joi.string().required(),
  birthday: Joi.date(),
  fav_donut: Joi.string(),
  credit_card: Joi.string().creditCard()
});

const employee = Joi.object().keys({
  employee_id: generalID.required(),
  user_id: generalID.required(),
  position: Joi.string().required()
});

const order = Joi.object().keys({
  order_id: generalID.required(),
  employee_id: generalID.required(),
  customer_id:  generalID.required(),
  drone_id: generalID.required(),
  time: Joi.date().required(),
  order_status: Joi.string()
});

const drone = Joi.object().keys({
  drone_id: generalID.required(),
  drone_name: Joi.string().required(),
  drone_model: Joi.string().required(),
  drone_location: Joi.string().required(),
  in_use: Joi.boolean()
});

const donut_list = Joi.object().keys({
  donut_list_id: generalID.required(),
  donut_id: generalID.required(),
  order_id: generalID.required()
});

const donut = Joi.object().keys({
  donut_id: generalID.required(),
  donut_name: Joi.string().required(),
  ingredients: Joi.array().items(Joi.string()),
  price: Joi.number().precision(2).positive().required()
});

module.exports = {
  user: user,
  '/customers': customer,
  '/employees': employee,
  '/orders': order,
  '/drones': drone,
  '/donut_lists': donut_list,
  '/donuts': donut
};
