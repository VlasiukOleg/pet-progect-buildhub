import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => (props.total > 0 ? '54px' : '20px')};
  border-bottom: 2px solid #5f9ea0;
  padding: 0px 20px;
`;
