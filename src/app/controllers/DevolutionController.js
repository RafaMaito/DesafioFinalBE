/* eslint-disable radix */
import Devolution from '../models/Devolution';
// import Sale from '../models/Sale';

class DevolutionControler {
  async index(req, res) {
    try {
      const { page, limit, reason, saleId } = req.query;

      const pageNum = Number.parseInt(page);
      const limitNum = Number.parseInt(limit);

      if (!page || !limit) {
        return res.status(400).json({ message: 'Invalid params' });
      }

      const where = {};

      if (reason) {
        where.reason = reason;
      }

      if (saleId) {
        where.sale_id = saleId;
      }

      // validação de uid
      if (Number.isNaN(pageNum && limitNum)) {
        return res.status(400).json({ message: 'Invalid data' });
      }

      return res.json(
        await Devolution.findAndCountAll({
          where,
          limit,
          offset: limit * (page - 1),
        })
      );
    } catch (error) {
      return res.status(error.status || 400).json(error.message);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const parsed = Number.parseInt(id);

      if (Number.isNaN(parsed)) {
        return res.status(400).json({ message: 'Invalid data' });
      }

      return res.json(await Devolution.findByPk(parsed));
    } catch (error) {
      return res.status(error.status || 400).json(error.message);
    }
  }

  async store(req, res) {
    // try {
    console.log('-------------------------------------');
    // const { id } = req.params;
    const { description, saleId } = req.body;
    console.log(description);

    const devolution = await Devolution.create({
      sale_id: saleId,
      description,
    });
    console.log(devolution);

    // const test = await Scleaale.destroy({ where: { sale_id: idInt } });

    return res.json(devolution);
    // } catch (error) {
    //   return res.status(error.status || 400).json(error.message);
    // }
  }
}

export default new DevolutionControler();
