'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/Response', (faker,i) => {
  return {
  	name : ['like','love','laught','cry','angry','wow'][i]
  }
})


Factory.blueprint('App/Models/User', (faker) => {
  return {
  	name : faker.name(),
    username: faker.username(),
    email : faker.email({domain : "g@.com"}),
    password : "paketchat",
    phone_number : faker.phone({ formatted: false })
  }
})

Factory.blueprint('App/Models/Feed', (faker) => {
  return {
  	from_group : (Math.floor(Math.random() * 10) > 5) ? faker.company() : null,
    media:  (Math.floor(Math.random() * 10) > 5) ? "hhttps://assets-a2.kompasiana.com/items/album/2019/04/09/images-1-5cabcb4b3ba7f70f4f0e3e32.jpg?t=o&v=760" : null,
    content : (Math.floor(Math.random() * 10) > 3) ? faker.sentence() : faker.paragraph(),
  }
})


Factory.blueprint('App/Models/Story', (faker) => {
  return {
    media:  (Math.floor(Math.random() * 10) > 5) ? "https://assets-a2.kompasiana.com/items/album/2019/04/09/images-1-5cabcb4b3ba7f70f4f0e3e32.jpg?t=o&v=760" : null,
    content : (Math.floor(Math.random() * 10) > 3) ? faker.sentence() : faker.word(),
  }
})
