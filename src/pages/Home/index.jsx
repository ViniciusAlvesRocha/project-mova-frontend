import React from 'react';
import FilterBy from '../../components/FilterBy';
import FilterByContent from '../../components/FilterByContent';
import ButtonSearch from '../../components/ButtonSearch';
import Countries from '../../components/Countries';
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
    </StyledHome>
  );
}

export default Home;
