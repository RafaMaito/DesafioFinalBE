/* eslint-disable radix */
import Category from '../models/Category';

class CategoryController {
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
    // const where = {};
    return res.json(
      await Category.findAndCountAll({
        // where,
        limit,
        offset: limit * (page - 1),
      })
    );
  }

  async store(req, res) {
    const { id, name } = req.body;

    const category = await Category.create({
      id,
      name,
    });

    return res.json(category);
  }
}

export default new CategoryController();
