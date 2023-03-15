const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { APP_SECRET, getUserId } = require("../utils");

/* This function takes in a parent, args, context, and info argument and creates a new user with a hashed password using bcrypt,
 and returns a JWT token and the user object.*/ 
async function signup(parent, args, context, info) {
  
  const password = await bcrypt.hash(args.password, 10);
  const user = await context.prisma.user.create({ data: { ...args, password } });
  const token = jwt.sign({ userId: user.id }, APP_SECRET);
  return {
    token,
    user,
  };
}

/* This function takes in a parent, args, context, and info argument and checks if the user exists in the database 
and if the provided password is valid using bcrypt.
If the authentication is successful, it returns a JWT token and the user object.*/
async function login(parent, args, context, info) {

  const user = await context.prisma.user.findUnique({ where: { email: args.email } });
  if (!user) {
    throw new Error("No such user found");
  }

 
  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET);


  return {
    token,
    user,
  };
}

/* This function takes in a parent, args, context, and info argument and creates a new product linked to the authenticated user.*/ 
function post(parent, args, context, info) {
  const userId = getUserId(context);
  return context.prisma.product.create({
    data: {
      name: args.name,
      description: args.description,
      price: args.price,
      seller: { connect: { id: userId } },
    },
  });
}
/*This function takes in a parent, args, context, and info argument and updates an existing product linked to the authenticated user.
 It checks if the product exists and if the authenticated user is the owner of the product before performing the update operation.*/
async function updateProduct(parent, args, context, info) {
  const userId = getUserId(context);
  const productExists = await context.prisma.product.findUnique({
    where: { id: parseInt(args.id) },
  });
  if (!productExists) {
    throw new Error(`Product not found for id: ${args.id}`);
  }

  const isProductOwner = productExists.sellerId === userId;
  if (!isProductOwner) {
    throw new Error("You can't update a product that you don't own");
  }

  return context.prisma.product.update({
    where: { id: parseInt(args.id) },
    data: {
      name: args.name,
      description: args.description,
      price: args.price,
    },
  });
}
/* function takes in a parent, args, context, and info argument and deletes an existing product linked to the authenticated user.
It checks if the product exists and if the authenticated user is the owner of the product before performing the delete operation.*/
async function deleteProduct(parent, args, context, info) {
  const userId = getUserId(context);
  const productExists = await context.prisma.product.findUnique({
    where: { id: parseInt(args.id) },
  });
  if (!productExists) {
    throw new Error(`Product not found for id: ${args.id}`);
  }

  const isProductOwner = productExists.sellerId === userId;
  if (!isProductOwner) {
    throw new Error("You can't delete a product that you don't own");
  }

  return context.prisma.product.delete({
    where: { id: parseInt(args.id) },
  });
}

module.exports = {
  signup,
  login,
  post,
  updateProduct,
  deleteProduct,
};
