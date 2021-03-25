import Sequelize, { Model } from 'sequelize';

class Region extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        region_name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,

        tableName: 'region',
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.NearbyRegion, {
      as: 'nearby_region',
      foreignKey: 'region_id',
    });

    this.hasMany(models.Sale, {
      as: 'sale',
      foreignKey: 'region_id',
    });
    this.hasOne(models.Stock, {
      as: 'stock',
      foreignKey: 'stock_region_id',
    });
  }
}
export default Region;
