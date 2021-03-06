import styled from 'styled-components';

export const Wrapper = styled.ul`
  max-width: 540px;
  height: 75vh;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.m};
  background: #fff;
  list-style: none;
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 10px;

  li:first-child {
    padding-top: 0;
  }

  li:last-child {
    border-bottom: none;
    padding-top: 0;
  }
`;
