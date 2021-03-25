import Product from '../models/Product';

class ProductController {
  async index(req, res) {
    const product = await Product.findAll();
    return res.json(product);
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
    // const { name, description } = req.body;
    // const { id } = req.params;
    // const parse = parseInt(id);
    // if (Number.isNaN(parse)) {
    //   return res.status(400).json({
    //     massage: 'Invalid ID',
    //   });
    // }
    // const product = await Product;
  }

  async delete(req, res) {}
}

export default new ProductController();
