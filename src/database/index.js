import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import Product from '../app/models/Product';
import Stock from '../app/models/Stock';
import Devolution from '../app/models/Devolution';
import Sale from '../app/models/Sale';
import Category from '../app/models/Category';
import NearbyRegion from '../app/models/NearbyRegion';
import Region from '../app/models/Region';

const models = [
  Product,
  Stock,
  Devolution,
  Sale,
  Category,
  Region,
  NearbyRegion,
];
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
