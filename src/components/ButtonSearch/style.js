import styled from 'styled-components';

const StyledButtonSearch = styled.button`
  width: 156px;
  height: 36px;
  border: none;
  background: #6D2080;
  border-radius: 10px;
  color: rgb(255, 255, 255);
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
  line-height: 36px;
  
  @media (max-width: 600px) {
    position: absolute;
    top: 320px;
    right: 40px;
  }
`;

export default StyledButtonSearch;