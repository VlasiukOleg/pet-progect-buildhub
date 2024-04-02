import { useState } from 'react';

import { OrderWrap, WeightWrap, TotalPriceWrap, Sum } from './OrderBar.styled';

import { Link as OrderLink } from 'react-router-dom';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDeliveryPrice } from '../../redux/deliverySlice';
import { clearQuantity } from '../../redux/materialsSlice';
import {
  getDeliveryPrice,
  getDeliveryType,
  getIsMovingPriceAddToOrder,
  getMovingPrice,
} from '../../redux/selectors';

import { calculateDeliveryFee } from 'utils/calculateDeliveryFee';

import { IoPricetagsOutline } from 'react-icons/io5';
import { TbWeight } from 'react-icons/tb';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaPeopleCarry } from 'react-icons/fa';

import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';

export const OrderBar = ({ weight, total, quantity }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const deliveryPrice = useSelector(getDeliveryPrice);
  const deliveryType = useSelector(getDeliveryType);
  const isMovingPriceAddToOrder = useSelector(getIsMovingPriceAddToOrder);
  const movingPrice = useSelector(getMovingPrice);

  const dispatch = useDispatch();

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const value = calculateDeliveryFee(weight);
    dispatch(setDeliveryPrice(value));
  }, [dispatch, weight]);

  const onClearOrder = () => {
    console.log('CLick');
    dispatch(clearQuantity(0));
  };

  return (
    <OrderWrap scroll={scrollPosition}>
      <div>
        <p>
          Кількість товарів: {quantity}{' '}
          <IconButton aria-label="delete" onClick={onClearOrder} color="error">
            <DeleteForeverIcon size="small" />
          </IconButton>
        </p>
      </div>

      <WeightWrap>
        <TbWeight size="18px" />
        <span>{weight} кг</span>{' '}
      </WeightWrap>
      {deliveryType === 'delivery' && (
        <WeightWrap>
          <TbTruckDelivery size="18px" />
          <span>{deliveryPrice} грн.</span>{' '}
        </WeightWrap>
      )}
      {isMovingPriceAddToOrder && (
        <WeightWrap>
          <FaPeopleCarry size="18px" />
          <span>{movingPrice} грн.</span>{' '}
        </WeightWrap>
      )}
      <TotalPriceWrap>
        <IoPricetagsOutline size="18px" />
        <Sum>Сума: </Sum> <span>{total} грн.</span>
      </TotalPriceWrap>
      <Button
        variant="contained"
        color="teal"
        to="/order"
        component={OrderLink}
      >
        Замовити
      </Button>
    </OrderWrap>
  );
};
