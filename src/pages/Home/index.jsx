import React from 'react';
import FilterBy from '../../components/FilterBy';
import FilterByContent from '../../components/FilterByContent';
import ButtonSearch from '../../components/ButtonSearch';
import Countries from '../../components/Countries';
import Pagination from '../../components/Pagination';
import StyledHome from './style';

const Home = () => {
  return (
    <StyledHome className="container">
      <div className="search-country">
        <FilterBy />
        <FilterByContent />
        <ButtonSearch />
      </div>
      <Countries />
      <Pagination />
    </StyledHome>
  );
}

export default Home;
