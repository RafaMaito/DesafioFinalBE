import Sequelize, { Model } from 'sequelize';

class Sale extends Model {
  static init(sequelize) {
    super.init(
      {
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
        amount: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        product_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'product',
            key: 'id',
          },
        },
        region_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'region',
            key: 'id',
          },
        },
      },
      {
        sequelize,
        tableName: 'sale',
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Product, {
      as: 'product',
      foreignKey: 'product_id',
      through: 'product_sale',
    });

    this.belongsTo(models.Region, {
      as: 'region',
      foreignKey: 'region_id',
    });
  }
}
export default Sale;
