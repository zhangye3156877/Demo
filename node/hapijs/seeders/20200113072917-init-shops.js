'use strict';

const timestamps = {
  created_at: new Date(),
  updated_at: new Date(),
};

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'shops',
    [
      { id: 1, name: 'd1', thumb_url: '1.png', ...timestamps },
      { id: 2, name: 'd2', thumb_url: '2.png', ...timestamps },
      { id: 3, name: 'd3', thumb_url: '3.png', ...timestamps },
      { id: 4, name: 'd4', thumb_url: '4.png', ...timestamps },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => {
    const { Op } = Sequelize;
    // 删除 shop 表 id 为 1，2，3，4 的记录
    return queryInterface.bulkDelete('shops', { id: { [Op.in]: [1, 2, 3, 4] } }, {});
  },
};
