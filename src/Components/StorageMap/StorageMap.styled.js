import styled from 'styled-components';

export const CityBtn = styled.button`
  position: absolute;
  //   top: 214px;
  left: ${props => {
    if (props.number === 1) {
      return '45%';
    }
    if (props.number === 2) {
      return '51%';
    }
    if (props.number === 3) {
      return '30%';
    }
    if (props.number === 4) {
      return '71%';
    }
  }};

  top: ${props => {
    if (props.number === 1) {
      return '28%';
    }
    if (props.number === 2) {
      return '46%';
    }
    if (props.number === 3) {
      return '39%';
    }
    if (props.number === 4) {
      return '53%';
    }
  }};

  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;

  color: ${({ theme }) => theme.colors.darkAccent};
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;

  border: 2px solid ${({ theme }) => theme.colors.darkAccent};
  cursor: pointer;

  transition: transform 250ms ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const StorageMapWrap = styled.div`
  position: relative;
  text-align: center;
`;

export const Image = styled.img`
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
`;
