import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './card';

function App() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const ACCESS_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE1MDU5MTcxLCJpYXQiOjE3MTUwNTg4NzEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjVmYWU0YTc4LTg0OTEtNGI1YS1hMjE4LWNhMzk0MDExOTQxNSIsInN1YiI6InJhbXBhbHlhZGF2MjMwODIwMDFAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiUmFtcGFsIiwiY2xpZW50SUQiOiI1ZmFlNGE3OC04NDkxLTRiNWEtYTIxOC1jYTM5NDAxMTk0MTUiLCJjbGllbnRTZWNyZXQiOiJEWnNpcFhDWGRKY21EdlRTIiwib3duZXJOYW1lIjoiUmFtcGFsIiwib3duZXJFbWFpbCI6InJhbXBhbHlhZGF2MjMwODIwMDFAZ21haWwuY29tIiwicm9sbE5vIjoiMDU1NzY4MDI3MjEifQ.1_dyrwxj9ktGjB7vGBz7psl7ZG0JuBJV5pzUSK4U7EQ';

  const getAllProducts = async () => {
    try {
      const response = await axios.get(
        'http://28.244.56.144/test/companies/:companyname/categories/:categoryname/products?top=n&minPrice=p&maxprice=q',
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
      setAllProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductsInRange = async () => {
    try {
      const response = await axios.get(
        'http://20.244.56.144/test/companies/FLP/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000',
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
    getProductsInRange();
  }, []);

  return (
    <div>
      <h1>Welcome to React App</h1>
      <h2>Number of all products: {allProducts.length}</h2>
      {allProducts.map((product) => (
        <Card key={product.id} {...product} />
      ))}
      <h2>Number of products in range: {products.length}</h2>
      {products.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
}

export default App;
