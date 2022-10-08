import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  max-width: 1280px;
  margin: 0 auto;
`;
const Products = ({ ctg, filter, sort }) => {
  console.log(ctg, filter, sort);
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res =await axios.get("http://localhost:5000/api/product");
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [ctg]);
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
