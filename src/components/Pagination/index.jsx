import React from 'react';
import ButtonPage from '../ButtonPage';
import ArrowLeft from '../../images/arrow-left.jpeg';
import ArrowRight from '../../images/arrow-right.jpeg';
import { connect } from 'react-redux';
import { StyledPagination, StyledArrowLeft, StyledArrowRight } from './style';
import { setIntervalPagination } from '../../action';

const Pagination = (props) => {

  const { countries, page, intervalPagination, setIntervalPagination } = props;
  const numberPages = Math.ceil(countries.length / 10);
  
  const buttonsPage = () => {
  let buttonsPage = [];
  for (
    let index = intervalPagination[0];
    index <= (numberPages < intervalPagination[1] ? numberPages : intervalPagination[1]);
    index += 1
  ) {
    buttonsPage.push(
      <ButtonPage
        key={ index }
        numberPage={ index }
        className={ page === index ? "page-button-selected" : "page-button-styled-default" }
      />)
  }
    return buttonsPage;
  };

  const render = () => {
    let component = false;
    if (countries.length !== 0) {
      component = (
        <StyledPagination numberPages={ numberPages }>
          <StyledArrowLeft
            className="arrow-pagination"
            onClick={ () => {
              if (intervalPagination[0] >= 1) {
                setIntervalPagination([intervalPagination[0] - 1, intervalPagination[1] - 1]);
              }
            } }
            intervalPagination={ intervalPagination[0] }
          ><img src={ ArrowLeft } alt="arrow left" />
          </StyledArrowLeft>
            { buttonsPage() }
          <StyledArrowRight
            className="arrow-pagination"
            onClick={ () => {
              if (intervalPagination[1] < numberPages) {
                setIntervalPagination([intervalPagination[0] + 1, intervalPagination[1] + 1]);
              }
            } }
            intervalPagination={ intervalPagination[1] } 
            numberPages={ numberPages }
          ><img src={ ArrowRight } alt="arrow right" />
          </StyledArrowRight>
        </StyledPagination>
      );
    }
    return component;
  }

  return (render());
}

const mapStateToProps = (state) => ({
  countries: state.countries,
  page: state.page,
  intervalPagination: state.intervalPagination,
});

const mapDispatchToProps = (dispatch) => ({
  setIntervalPagination: (intervalPagination) => dispatch(setIntervalPagination(intervalPagination)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);