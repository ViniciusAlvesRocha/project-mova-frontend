import styled from 'styled-components';

export const FlagCountry = styled.div`
  margin: 50px 10px;
  img {
    width: 316px;
    height: 181px;
  }
`;

export const ContainerCountries = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 600px) {
    margin-top: ${ 
      (props) => {
        const { pathname } = props.history.location;
        return  pathname.startsWith('/country/') ? '0' : '150px';
      }
    }
  }
`;
