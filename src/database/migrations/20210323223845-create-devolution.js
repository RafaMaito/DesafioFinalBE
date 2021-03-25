module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('devolution', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      reason: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      date_devolution: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      sale_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'sale',
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
    await queryInterface.dropTable('devolution');
  },
};
