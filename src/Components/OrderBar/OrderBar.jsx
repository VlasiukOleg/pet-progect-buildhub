import {
  OrderWrap,
  WeightWrap,
  TotalPriceWrap,
  Sum,
  OrderButton,
} from './OrderBar.styled';

import { IoPricetagsOutline } from 'react-icons/io5';
import { TbWeight } from 'react-icons/tb';

export const OrderBar = ({ weight, total, quantity }) => {
  return (
    <OrderWrap>
      <p>Кількість товарів: {quantity} </p>
      <WeightWrap>
        <TbWeight size="18px" /> Вага <span>{weight} кг</span>{' '}
      </WeightWrap>
      <TotalPriceWrap>
        <IoPricetagsOutline size="18px" />
        <Sum>Сума: </Sum> <span>{total} грн.</span>
        <OrderButton to="/order" type="button">
          Замовити
        </OrderButton>
      </TotalPriceWrap>
    </OrderWrap>
  );
};
