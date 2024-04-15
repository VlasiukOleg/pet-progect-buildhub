import styled from 'styled-components';

export const OrderWrap = styled.div`
  position: fixed;
  top: ${props => (props.scroll > 48 ? '0' : '48px')};
  left: 50%;
  width: 1200px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;

  padding: 5px 30px;
  color: #ffffff;
  background-color: #80cbc4;
  border-radius: 10px;

  transform: translateX(-50%);

  transition: top 250ms ease-in-out;
`;

export const BoxWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 5px;
  background-color: #ffffff;
  color: #696969;

  margin-right: 16px;

  span {
    font-weight: 700;
    margin-left: 5px;
  }
`;

export const CartWrap = styled.div`
  display: flex;
  align-items: center;
`;
