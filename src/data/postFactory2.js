const { faker } = require('@faker-js/faker');

const createPostOverrides = (overrides = {}) => ({
    title: faker.lorem.words(5),
    body: faker.lorem.sentence(),
    userId: faker.number.int({ min: 1, max: 100 }),
    ...overrides
});

module.exports = { createPostOverrides };