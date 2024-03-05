import styled from 'styled-components';

export const ToogleMovingBtn = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: transparent;
  font-weight: 700;
  color: ${props =>
    props.isMovingPriceAdd ? 'rgb(237, 91, 91)' : 'rgb(95, 158, 160)'};
  cursor: pointer;
  border: ${props =>
    props.isMovingPriceAdd
      ? '1px solid rgb(237, 91, 91)'
      : '1px solid rgb(95, 158, 160)'};

  /* &:hover {
    color: rgb(23, 89, 92);
  } */
`;
