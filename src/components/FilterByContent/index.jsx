import React from 'react';
import { connect } from 'react-redux';
import { handleContentFilter } from '../../action';
import StyledFilterByContent from './style';

const FilterByContent = (props) => {
  const { selected, filterBy, contentSelect, handleContentFilter } = props;

  const optionsByFilter = () => {
    let textOptionDefault = '';
    let returnJSX = null;
    let label = '';
    if (filterBy === "region") {
      textOptionDefault = 'Escolha uma região';
      label = 'Região';
    } else if (filterBy === "capital") {
      textOptionDefault = 'Escolha uma capital';
      label = 'Capital';
    } else if (filterBy === "lang") {
      textOptionDefault = 'Escolha uma língua';
      label = 'Língua';
    } else if (filterBy === "name") {
      textOptionDefault = 'Escolha um país';
      label = 'País';
    } else if (filterBy === "callingcode") {
      textOptionDefault = 'Ecolha um código de ligação';
      label = 'Código de ligação';
    }
  
    if (filterBy === "lang") {
      returnJSX = (<>
        <option value="DEFAULT" disabled>{ textOptionDefault }</option>
        { contentSelect.map((option) => (
          <option
            key={ `${option}-${option}-lang` }
            value={ option[0] }
          >{ option[1] }</option>
        )) }
        </>);
    } else {
      returnJSX = (<>
        { selected
          ? <option value="DEFAULT" >{ selected }</option>
          : <option value="DEFAULT" disabled>{ textOptionDefault }</option>
        }
        
        { contentSelect.map((option) => (option !== selected
              ? (<option
                key={ `${option}--${option}` }
                value={ option }
              >{ option }</option>)
              : false )) }
        </>);
    }
  
    return (<StyledFilterByContent>
      <label htmlFor="filter-by-content">{ label }</label>
      <select
        id="filter-by-content"
        defaultValue={'DEFAULT'}
        onChange={ (event) => handleContentFilter(event.target.value) }
      >
      { returnJSX }
      </select>
    </StyledFilterByContent>);
  }

  return (<>
  { contentSelect.length > 0 && optionsByFilter() }
  </>);
}

const mapStateToProps = (state) => ({
  filterBy: state.filterBy,
  contentSelect: state.contentSelect,
  selected: state.selected,
});

const mapDispacthToProps = (dispatch) => ({
  handleContentFilter: (content) => dispatch(handleContentFilter(content))
});

export default connect(mapStateToProps, mapDispacthToProps)(FilterByContent);
