// import styled from 'styled-components';
import styled from '@emotion/styled';

export const MaterialsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-bottom: 20px;
`;

export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 150px;
  max-height: 150px;
  border-radius: 5px;
  border: 1px solid #5f9ea0;
  overflow: hidden;
`;

export const InfoWrap = styled.div`
  max-width: 500px;

  h2 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #696969;
    text-decoration: underline;
  }

  p {
    font-size: 12px;
    margin-bottom: 10px;
    color: #696969;
  }
`;

export const Price = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const IncreaseBtn = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  background-color: #5f9ea0;
  font-weight: 700;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const DecreaseBtn = styled.button`
  width: 24px;
  height: 24px;
  font-weight: 700;
  border-radius: 2px;
  background-color: #5f9ea0;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const Input = styled.input`
  max-width: 60px;
  font-size: 28px;
  outline: none;
  border: none;
  text-align: center;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const QuantityWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TotalPrice = styled.div`
  font-size: 28px;
  padding: 10px;
  border: 1px solid #5f9ea0;
  border-radius: 5px;
`;
