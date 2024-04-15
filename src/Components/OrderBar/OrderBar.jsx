import { useState } from 'react';

import { OrderWrap, BoxWrap, CartWrap } from './OrderBar.styled';
import { CartButton, StyledBadge } from './OrderBarMuiStyled';

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
import Typography from '@mui/material/Typography';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
    const deliveryFee = calculateDeliveryFee(weight);
    dispatch(setDeliveryPrice(deliveryFee));
  }, [dispatch, weight]);

  const onClearOrder = () => {
    console.log('CLick');
    dispatch(clearQuantity(0));
  };

  return (
    <OrderWrap scroll={scrollPosition}>
      <CartWrap>
        <BoxWrap>
          <TbWeight size="18px" />
          <span>{weight} кг</span>{' '}
        </BoxWrap>
        {deliveryType === 'delivery' && (
          <BoxWrap>
            <TbTruckDelivery size="18px" />
            <span>{deliveryPrice} грн.</span>{' '}
          </BoxWrap>
        )}
        {isMovingPriceAddToOrder && (
          <BoxWrap>
            <FaPeopleCarry size="18px" />
            <span>{movingPrice} грн.</span>{' '}
          </BoxWrap>
        )}
      </CartWrap>
      <CartWrap>
        <BoxWrap>
          <IoPricetagsOutline size="18px" />
          <span>{total} грн.</span>
        </BoxWrap>
        <CartButton to="/order" component={OrderLink}>
          <StyledBadge badgeContent={quantity} color="success" sx={{ mr: 2 }}>
            <ShoppingCartIcon color="action" />
          </StyledBadge>
          <Typography
            variant="button"
            sx={{
              fontSize: '14px',
              fontWeight: '700',
              fontFamily: 'Montserrat',
            }}
          >
            Кошик
          </Typography>
        </CartButton>

        <IconButton aria-label="delete" onClick={onClearOrder} color="error">
          <DeleteForeverIcon size="small" />
        </IconButton>
      </CartWrap>
    </OrderWrap>
  );
};
