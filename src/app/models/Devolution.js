import Sequelize, { Model } from 'sequelize';

class Devolution extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        description: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        sale_id: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'sale',
            key: 'id',
          },
        },
      },
      { sequelize, tableName: 'devolution' }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Sale, {
      as: 'sale',
      foreignKey: 'sale_id',
    });
  }
}
export default Devolution;
