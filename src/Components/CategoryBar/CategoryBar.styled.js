import styled from 'styled-components';

export const CategoryWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
  border: 2px solid #5f9ea0;
  padding: 10px 20px;
  border-radius: 5px;
`;

export const CategoryInnerWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CategoryNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #5f9ea0;
  color: #ffffff;
  font-weight: 500;
  margin-right: 10px;
`;

export const CategoryTitle = styled.div`
  color: #696969;
  font-weight: 500;
`;

export const ToogleCategoryBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  background-color: transparent;
  outline: none;
  border: none;
  color: #696969;
  cursor: pointer;

  &:hover {
    color: #5f9ea0;
  }
`;