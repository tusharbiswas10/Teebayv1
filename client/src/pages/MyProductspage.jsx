import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const MyProductsPage = () => {
  return (
    <>
      <Header />
      <ProductForm />
      <ProductList />
    </>
  );
};

export default MyProductsPage;
