const { faker } = require('@faker-js/faker');

const createPostBody = () => ({
    title: faker.lorem.words(5),
    body: faker.lorem.sentence(),
    userId: faker.number.int({ min: 1, max: 10 })
});

module.exports = { createPostBody };