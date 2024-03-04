import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { DeliveryWrap, Label, Input } from './Delivery.styled';
import { getDeliveryType, getDeliveryPrice } from '../../redux/selectors';

import { setDeliveryType, setDeliveryPrice } from '../../redux/deliverySlice';

export const Delivery = ({ weight }) => {
  const deliveryType = useSelector(getDeliveryType);
  const deliveryPrice = useSelector(getDeliveryPrice);
  const dispatch = useDispatch();

  const calculateDeliveryFee = weight => {
    if (weight > 0 && weight <= 1500) {
      return 700;
    } else if (weight > 1500 && weight <= 2050) {
      return 800;
    } else if (weight > 2050 && weight <= 3000) {
      return 1200;
    } else if (weight > 3000 && weight <= 5000) {
      return 1500;
    } else if (weight > 5000 && weight <= 10000) {
      return 2000;
    } else if (weight > 10000) {
      return 'розраховується індивідуально';
    } else {
      return 0;
    }
  };

  const onChangeInput = e => {
    const value = e.currentTarget.value;
    dispatch(setDeliveryType(value));
  };

  useEffect(() => {
    const value = calculateDeliveryFee(weight);
    dispatch(setDeliveryPrice(value));
    // calculateDeliveryFee(weight);
  }, [dispatch, weight]);

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
