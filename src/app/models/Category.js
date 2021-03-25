import Sequelize, { Model } from 'sequelize';

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'category',
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Product, {
      as: 'product',
      foreignKey: 'product_id',
    });
  }
}
export default Category;
