import styled from 'styled-components';

export const CityBtn = styled.button`
  position: absolute;
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
      return '68%';
    }
  }};

  top: ${props => {
    if (props.number === 1) {
      return '35%';
    }
    if (props.number === 2) {
      return '51%';
    }
    if (props.number === 3) {
      return '41%';
    }
    if (props.number === 4) {
      return '57%';
    }
  }};

  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;

  color: ${({ theme }) => theme.colors.darkAccent};
  font-weight: 700;
  background-color: ${({ theme, active, number }) =>
    number === active ? 'white' : theme.colors.accent};
  border-radius: 50%;

  border: 2px solid ${({ theme }) => theme.colors.darkAccent};
  cursor: pointer;

  transition: transform 250ms ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const StorageInnerWrap = styled.div`
  position: relative;
`;

export const StorageMapWrap = styled.div`
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
