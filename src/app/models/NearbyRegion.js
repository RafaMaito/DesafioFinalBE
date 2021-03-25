import Sequelize, { Model } from 'sequelize';

class NearbyRegion extends Model {
  static init(sequelize) {
    super.init(
      {
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
      },
      {
        sequelize,
        tableName: 'nearby_region',
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Region, {
      as: 'region',
      foreignKey: 'id',
    });
  }
}
export default NearbyRegion;
