'use strict';
const { nanoid } = require('nanoid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
    {id: nanoid(), dailyMotivation: "It’s fine to celebrate success but it is more important to heed the lessons of failure. -Bill Gates", createdAt: new Date(), updatedAt: new Date()},
    {id: nanoid(), dailyMotivation: "The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. -Steve Jobs", createdAt: new Date(), updatedAt: new Date()},
    {id: nanoid(), dailyMotivation: "The biggest risk is not taking any risk. In a world that changing really quickly, the only strategy that is guaranteed to fail is not taking risks. -Mark Zuckerberg", createdAt: new Date(), updatedAt: new Date()},
    {id: nanoid(), dailyMotivation: "Why worry? If you’ve done the very best you can, then worrying won’t make it any better. -Walt Disney", createdAt: new Date(), updatedAt: new Date()},
    {id: nanoid(), dailyMotivation: "That some achieve great success, is proof to all that others can achieve it as well. -Abraham Lincoln", createdAt: new Date(), updatedAt: new Date()},
    {id: nanoid(), dailyMotivation: "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all – in which case, you fail by default. -J.K. Rowling", createdAt: new Date(), updatedAt: new Date()}
    ];
    return await queryInterface.bulkInsert('Motivations', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Motivations', null, {});
  }
};