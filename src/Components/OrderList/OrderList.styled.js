import styled from 'styled-components';

export const OrderListWrap = styled.div`
  width: 50%;
`;

export const MaterialsOrderList = styled.ul`
  margin-bottom: 15px;
  margin-top: 15px;
  max-height: 350px;
  border: 1px solid grey;
  border-radius: 5px;
  overflow: hidden;
  overflow-y: scroll;
  scrollbar-color: ${({ theme }) => theme.colors.primary}
    ${({ theme }) => theme.colors.light};
  scrollbar-width: thin;
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

export const Delivery = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 5px;
`;

export const Moving = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 5px;
`;

export const Total = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 18px;

  span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
