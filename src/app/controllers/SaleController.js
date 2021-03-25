/* eslint-disable radix */
import Sale from '../models/Sale';

class SaleController {
  async index(req, res) {
    const { page, limit } = req.query;

    const pageNum = Number.parseInt(page);
    const limitNum = Number.parseInt(limit);

    if (Number.isNaN(pageNum && limitNum)) {
      return res.status(400).json({ message: 'Invalid data' });
    }
    if (!page || !limit) {
      return res.status(400).json({ message: 'Invalid params' });
    }
    const where = {};
    return res.json(
      await Sale.findAndCountAll({
        where,
        limit,
        offset: limit * (page - 1),
      })
    );
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const parsed = Number.parseInt(id);

      if (Number.isNaN(parsed)) {
        return res.status(400).json({ message: 'Invalid dat' });
      }

      return res.json(await Sale.findByPk(parsed));
    } catch (error) {
      return res.status(error.status || 400).json(error.message);
    }
  }

  async store(req, res) {
    try {
      // const { id } = req.params;
      const { dateSale, amount, productId, regionId } = req.body;

      const sale = await Sale.create({
        date_sale: dateSale,
        amount,
        product_id: productId,
        region_id: regionId,
      });

      return res.json(sale);
    } catch (error) {
      return res.status(error.status || 400).json(error.message);
    }
  }

  // async update(req, res) {}

  // async delete(req, res) {}
}

export default new SaleController();
