import styled from 'styled-components';

const StyledHome = styled.main`
  margin-top: 80px;
  .search-country {
    display: flex;
    height: 20px;
    justify-content: space-between;
  }

  @media (max-width: 600px) {
    .search-country {
      flex-direction: column;
    }
  }
`;

export default StyledHome;