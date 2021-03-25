import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.DataTypes.STRING,
        },
        description: {
          type: Sequelize.DataTypes.STRING,
        },
        category_id: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'category',
            key: 'id',
          },
        },
      },
      {
        sequelize,
        tableName: 'product',
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Stock, {
      as: 'stock',
      foreignKey: 'product_id',
    });

    this.belongsToMany(models.Sale, {
      as: 'sale',
      foreignKey: 'sale_id',
      through: 'product_sale',
    });
  }
}

export default Product;
