import styled from "styled-components";

export const StyledPagination = styled.div`
  width: 100%;
  display: ${ (props) => {
    const { numberPages } = props;
    return numberPages === 1 ? 'none' : 'flex';
  } };
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const StyledArrowLeft = styled.button`
  display: ${ (props) => {
    const { intervalPagination } = props;
    return intervalPagination === 1 ? 'none' : 'block';
  } }
`;

export const StyledArrowRight = styled.button`
  display: ${ (props) => {
    const { intervalPagination, numberPages } = props;
    return (
      (intervalPagination === numberPages || numberPages < 5)
        ? 'none'
        : 'block');
  } }
`;
