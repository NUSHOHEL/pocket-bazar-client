import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;
const ProductList = () => {
  const location = useLocation();
  const ctg = location.pathname.split("/")[2];
  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      ...filters,
      [e.target.name]: value,
    });
  };
  
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name='color' onChange={handleFilters}>
            <Option selected disabled>
              Color
            </Option>
            <Option>Red</Option>
            <Option>Green</Option>
            <Option>Blue</Option>
          </Select>
          <Select name='size' onChange={handleFilters}>
            <Option selected disabled>
              size
            </Option>
            <Option>XL</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText> Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value='newest' selected disabled>
              Newest
            </Option>
            <Option value='asc'>Price(High to Low)</Option>
            <Option value='dsc'>Price (Low to High)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products  ctg = {ctg} filter= {filters} sort = {sort}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
