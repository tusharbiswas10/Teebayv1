const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class Product {
  async getAll() {
    return await prisma.product.findMany();
  }

  async getById(id) {
    return await prisma.product.findUnique({ where: { id } });
  }

  async create(data) {
    return await prisma.product.create({ data });
  }

  async update(id, data) {
    return await prisma.product.update({ where: { id }, data });
  }

  async delete(id) {
    return await prisma.product.delete({ where: { id } });
  }
}

module.exports = Product;
