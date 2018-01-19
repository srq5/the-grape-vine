'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [{
      first_name: 'Steven',
      last_name: 'Sammon',
      email: 'stevenesammon@hotmail.com',
      password: '123',
      username: 'stevens'
      },
      {
      first_name: 'Shaheena',
      last_name: 'Qureshi',
      email: 'shaheenaq@hotmail.com',
      password: '123',
      username: 'shaheena'
      }

      ], {});


    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */


  }
};
