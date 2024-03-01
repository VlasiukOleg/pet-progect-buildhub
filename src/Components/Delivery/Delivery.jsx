import { useEffect, useState } from 'react';

import { DeliveryWrap, Label, Input } from './Delivery.styled';

export const Delivery = ({ weight }) => {
  const [deliveryPrice, setDelivery] = useState(0);

  const calculateDeliveryFee = weight => {
    if (weight > 0 && weight <= 2000) {
      setDelivery(800);
    } else if (weight > 2000 && weight <= 3000) {
      setDelivery(1200);
    } else if (weight > 3000 && weight <= 5000) {
      setDelivery(1500);
    } else if (weight > 5000 && weight <= 10000) {
      setDelivery(2000);
    } else if (weight > 10000) {
      setDelivery('розраховується індивідуально');
    }
  };

  useEffect(() => {
    calculateDeliveryFee(weight);
  }, [weight]);

  return (
    <DeliveryWrap>
      <Label>
        <Input type="radio" name="delivery" />
        Самовивіз зі складу
      </Label>
      <Label>
        <Input type="radio" name="delivery" />
        Доставкa по Києву та області: {deliveryPrice} грн.
      </Label>
    </DeliveryWrap>
  );
};
