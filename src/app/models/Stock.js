import Sequelize, { Model } from 'sequelize';

class Stock extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        amount: {
          type: Sequelize.DataTypes.NUMBER,
          allowNull: false,
        },
        product_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'product',
            key: 'id',
          },
          region_id: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'region',
              key: 'id',
            },
          },
        },
      },
      {
        sequelize,

        tableName: 'stock',
      }
    );
    return this;
  }

  static associate(models) {
    this.hasOne(
      models.Product,
      {
        as: 'product',
        foreignKey: 'product_id',
      },
      this.belongsTo(models.Region, {
        as: 'region',
        foreignKey: 'region_id',
      })
    );
  }
}

export default Stock;
