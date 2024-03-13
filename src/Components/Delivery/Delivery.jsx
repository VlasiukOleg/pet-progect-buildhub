import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { DeliveryWrap, Label, Input } from './Delivery.styled';
import { getDeliveryType, getDeliveryPrice } from '../../redux/selectors';

import { setDeliveryType, setDeliveryPrice } from '../../redux/deliverySlice';

import { calculateDeliveryFee } from 'utils/calculateDeliveryFee';

export const Delivery = ({ weight }) => {
  const deliveryType = useSelector(getDeliveryType);
  const deliveryPrice = useSelector(getDeliveryPrice);
  const dispatch = useDispatch();

  const onChangeInput = e => {
    const value = e.currentTarget.value;
    dispatch(setDeliveryType(value));
  };

  return (
    <DeliveryWrap>
      <Label>
        <Input
          type="radio"
          name="deliveryType"
          value="pickup"
          onChange={e => onChangeInput(e)}
          checked={deliveryType === 'pickup'}
        />
        Самовивіз зі складу
      </Label>
      <Label>
        <Input
          type="radio"
          name="deliveryType"
          value="delivery"
          onChange={onChangeInput}
          checked={deliveryType === 'delivery'}
        />
        Доставкa по Києву та області: {deliveryPrice} грн.
      </Label>
    </DeliveryWrap>
  );
};
