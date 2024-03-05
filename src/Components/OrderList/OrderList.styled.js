import styled from 'styled-components';

export const MaterialsOrderList = styled.ul`
  width: 50%;
  border: 1px solid grey;
  border-radius: 5px;
  overflow: hidden;
`;

export const MaterialOrderItem = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid grey;

  &:last-child {
    border-bottom: none;
  }
`;
