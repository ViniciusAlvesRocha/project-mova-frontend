import React from 'react';
import { connect } from 'react-redux';
import { filterBy } from "../../action";
import ContainerFilterBy from './style';

const FilterByComponent = (props) => {
  const {
    filterBy,
    handleFilterBy,
  } = props;

  return (<ContainerFilterBy>
    <label htmlFor="select-by">Filtrar por</label>
    <select id="select-by" defaultValue={'DEFAULT'} onChange={ (event) => handleFilterBy(event.target.value) }>
      { filterBy === 'region'
          ? <option value="region" selected>Região</option>
          : <option value="DEFAULT" disabled>Escolha uma opção</option>
      }
      
      { filterBy !== 'region' && <option value="region">Região</option> }
      <option value="capital">Capital</option>
      <option value="lang">Língua</option>
      <option value="name">País</option>
      <option value="callingcode">Código de ligação</option>
    </select>
  </ContainerFilterBy>)
}
const mapStateToProps = (state) => ({
  filterBy: state.filterBy,
  isFetching: state.isFetching,
  contentSelect: state.contentSelect,
});

const mapDispatchToProps = (dispatch) => ({
  handleFilterBy: (filter) => dispatch(filterBy(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterByComponent);