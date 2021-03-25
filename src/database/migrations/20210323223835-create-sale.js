module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sale', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      date_sale: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      region_id: {
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
    await queryInterface.dropTable('sale');
  },
};
