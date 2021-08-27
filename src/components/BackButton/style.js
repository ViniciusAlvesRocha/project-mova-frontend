import styled from 'styled-components';

const StyledBackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 134px;
  height: 36px;
  font-family: 'Montserrat', sans-serif;
  background: rgb(255, 255, 255);
  border: solid 1px #6D2080;
  color: #6D2080;

  @media (max-width: 600px) {
    & {
      border: none;
    }
    span{
      display: none;
    }
  }
`;

export default StyledBackButton;