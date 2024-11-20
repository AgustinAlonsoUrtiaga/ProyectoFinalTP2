const faker = require("@faker-js/faker").faker;

const get = _ => ({
    title: faker.lorem.words(3),
    description: faker.lorem.sentences(2),
    urgent: faker.datatype.boolean(),
    estimatedTime: faker.number.int({ min: 1, max: 40 }),
    timeUnit: faker.helpers.arrayElement(["hours", "days", "weeks"]),
    status: faker.helpers.arrayElement(["pending", "in-progress", "completed"]),
    timeUsed: faker.number.int({ min: 0, max: 40 }),
    scrumSection: faker.helpers.arrayElement(["Backlog", "To Do", "In Progress", "Done"]),
    priority: faker.number.int({ min: 1, max: 5 }),
    createdDate: faker.date.past(),
    dueDate: faker.date.future(),
    environment: faker.helpers.arrayElement(["development", "staging", "production"]),
});

module.exports = {
    get
};
