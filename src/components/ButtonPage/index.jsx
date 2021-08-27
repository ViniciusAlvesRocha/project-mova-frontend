import React from 'react';
import { connect } from 'react-redux';
import { setPage } from '../../action';
import StyledButtomPage from './style';

const ButtonPage = (props) => {
  const { setPage, numberPage, className } = props;
  return (
    <StyledButtomPage
      className={ className }
      onClick={ (event) => setPage(parseInt(event.target.value)) }
      value={ numberPage }
    >
      { numberPage }
    </StyledButtomPage>);
}

const mapDispatchToProps = (dispatch) => ({
  setPage: (page) => dispatch(setPage(page)),
});

export default connect(null, mapDispatchToProps)(ButtonPage);
