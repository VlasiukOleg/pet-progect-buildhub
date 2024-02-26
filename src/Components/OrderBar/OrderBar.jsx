import { OrderWrap, WeightWrap, TotalPriceWrap, Sum } from './OrderBar.styled';

import { IoPricetagsOutline } from 'react-icons/io5';
import { TbWeight } from 'react-icons/tb';

export const OrderBar = ({ weight, total }) => {
  return (
    <OrderWrap>
      <p>Всього товарів: 1</p>
      <WeightWrap>
        <TbWeight size="18px" /> Вага <span>{weight} кг</span>{' '}
      </WeightWrap>
      <TotalPriceWrap>
        <IoPricetagsOutline size="18px" />
        <Sum>Сума: </Sum> <span>{total} грн.</span>
      </TotalPriceWrap>
    </OrderWrap>
  );
};
