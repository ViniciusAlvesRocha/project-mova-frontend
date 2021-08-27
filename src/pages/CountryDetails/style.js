import styled from 'styled-components';

const StyledCountryDetails = styled.div`
  margin-top: 100px;

  div.country-details {
    display: flex;

    img {
      width: 443px;
      height: 258px;
    }

    div {
      font-family: 'Montserrat', sans-serif;
      color: rgb(0, 0, 0, .6);
      font-size: 20px;
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      margin-left: 40px;

      span {
        margin-bottom: 10px;
      }
    }
  }

  .heading-neighboring-countries {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 18px;
    margin-top: 100px;
  }

  @media (max-width: 600px) {
    div.country-details {
      flex-direction: column;

      img {
        width: 100%;
        height: 181px;
      }

      div {
        margin-left: 0;
      }
    }

    .heading-neighboring-countries {
      font-weight: 400;
      font-size: 22px;
      margin-top: 30px;
    }
  }
`;

export default StyledCountryDetails;
