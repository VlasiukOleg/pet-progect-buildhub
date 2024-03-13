import {
  OrderWrap,
  WeightWrap,
  TotalPriceWrap,
  Sum,
  OrderButton,
} from './OrderBar.styled';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDeliveryPrice } from '../../redux/deliverySlice';
import { clearQuantity } from '../../redux/materialsSlice';
import { getDeliveryPrice, getDeliveryType } from '../../redux/selectors';

import { calculateDeliveryFee } from 'utils/calculateDeliveryFee';

import { IoPricetagsOutline } from 'react-icons/io5';
import { TbWeight } from 'react-icons/tb';
import { TbTruckDelivery } from 'react-icons/tb';

import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const OrderBar = ({ weight, total, quantity }) => {
  const deliveryPrice = useSelector(getDeliveryPrice);
  const deliveryType = useSelector(getDeliveryType);
  const dispatch = useDispatch();

  useEffect(() => {
    const value = calculateDeliveryFee(weight);
    dispatch(setDeliveryPrice(value));
  }, [dispatch, weight]);

  const onClearOrder = () => {
    console.log('CLick');
    dispatch(clearQuantity(0));
  };

  return (
    <OrderWrap>
      <div>
        <p>
          Кількість товарів: {quantity}{' '}
          <IconButton aria-label="delete" onClick={onClearOrder} color="error">
            <DeleteForeverIcon size="small" />
          </IconButton>
        </p>
      </div>

      <WeightWrap>
        <TbWeight size="18px" /> Вага <span>{weight} кг</span>{' '}
      </WeightWrap>
      {deliveryType === 'delivery' && (
        <WeightWrap>
          <TbTruckDelivery size="18px" /> Доставка{' '}
          <span>{deliveryPrice} грн.</span>{' '}
        </WeightWrap>
      )}
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
