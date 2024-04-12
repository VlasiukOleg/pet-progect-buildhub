import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDeliveryType,
  getDeliveryStorage,
  getActiveStore,
} from '../../redux/selectors';
import {
  setDeliveryType,
  setDeliveryStorage,
  setActiveStore,
} from '../../redux/deliverySlice';

import mapImage from '../../images/kiev_district.webp';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { StorageSelectedModal } from 'Components/StorageSelectedModal/StorageSelectedModal';

import {
  CityBtn,
  StorageMapWrap,
  StorageInnerWrap,
  Image,
  Title,
} from './StorageMap.styled';

const storages = [
  { id: 1, location: 'Київ, вул. Марка Вовчка, 14 (Куренівка)' },
  { id: 2, location: 'Київ, пров. Деревообробний , 5  (Видубичі)' },
  { id: 3, location: 'Київ, пр-т Перемоги, 67. корпус-Nb (м. Нивки)' },
  { id: 4, location: 'Київ, вул.Бориспільська, 7' },
];

export const StorageMap = () => {
  const dispatch = useDispatch();
  const deliveryType = useSelector(getDeliveryType);
  const deliveryStorage = useSelector(getDeliveryStorage);
  const activeStore = useSelector(getActiveStore);

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleClickOpen = (storageLocation, storageId) => {
    setOpen(true);
    setSelectedValue(storageLocation);
    dispatch(setActiveStore(storageId));
  };

  const handleClose = deliveryType => {
    setOpen(false);
    dispatch(setDeliveryType(deliveryType));
    dispatch(setDeliveryStorage(selectedValue));

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const handleClickNextPage = () => {
    navigate('/materials');
  };

  return (
    <StorageMapWrap>
      <Title>Оберіть найближчий до Вас склад завантаження</Title>
      <StorageInnerWrap>
        {storages.map(({ location, id }) => (
          <CityBtn
            type="button"
            number={id}
            active={activeStore}
            onClick={() => handleClickOpen(location, id)}
          >
            {id}
          </CityBtn>
        ))}

        <Image src={mapImage} alt="map of kiyv" width={600}></Image>
      </StorageInnerWrap>

      <StorageSelectedModal
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
      {deliveryStorage && (
        <Typography variant="subtitle1" component="div">
          Склад: {deliveryStorage}
        </Typography>
      )}

      {deliveryType && (
        <Typography variant="subtitle1" component="div">
          Тип доставки:{' '}
          {deliveryType === 'pickup' ? 'Самовивіз' : 'Доставка автотранспортом'}
        </Typography>
      )}
      <Button
        variant="contained"
        onClick={handleClickNextPage}
        sx={{ mt: 2 }}
        disabled={deliveryType === ''}
        color="teal"
      >
        Продовжити
      </Button>
    </StorageMapWrap>
  );
};
