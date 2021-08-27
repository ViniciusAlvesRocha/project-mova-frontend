import React from 'react';
import StyledBackButton from './style';

const BackButton = () => {
  return (
    <a href="/">
      <StyledBackButton>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 7V11H5.83L9.41 7.41L8 6L2 12L8 18L9.41 16.59L5.83 13H21V7H19Z" fill="#6D2080"/>
        </svg>
        <span>Voltar</span>
      </StyledBackButton>
    </a>);
}

export default BackButton;
