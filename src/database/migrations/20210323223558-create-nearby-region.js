module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('nearby_region', {
      region_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'region',
          key: 'id',
        },
      },
      nearby_region_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'region',
          key: 'id',
        },
      },
      created_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('nearby_region');
  },
};
