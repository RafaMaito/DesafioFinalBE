/* eslint-disable radix */
import Product from '../models/Product';

class ProductController {
  async index(req, res) {
    const { page, limit, name, description, categoryId } = req.query;

    const pageNum = Number.parseInt(page);
    const limitNum = Number.parseInt(limit);

    if (!page || !limit) {
      return res.status(400).json({ message: 'Invalid params' });
    }

    const where = {};

    if (name) {
      where.name = name;
    }

    if (description) {
      where.description = description;
    }

    if (categoryId) {
      where.category_id = categoryId;
    }

    // validação de uid
    if (Number.isNaN(pageNum && limitNum)) {
      return res.status(400).json({ message: 'Invalid data' });
    }

    return res.json(
      await Product.findAndCountAll({
        where,
        limit,
        offset: limit * (page - 1),
      })
    );
  }

  async show(req, res) {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    return res.json(product);
  }

  async store(req, res) {
    const { name, description, categoryId } = req.body;
    const product = await Product.create({
      name,
      description,
      category_id: categoryId,
    });

    return res.json(product);
  }

  async update(req, res) {
    const { id } = req.params;

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: 'Invalid data' });
    }

    const { name, description, categoryId } = req.body;

    product.name = name;
    product.description = description;
    product.category_id = categoryId;
    product.save();

    return res.json(product);
  }

  delete(req, res) {}
}

export default new ProductController();
