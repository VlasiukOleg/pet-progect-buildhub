import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDeliveryType, getDeliveryStorage } from '../../redux/selectors';
import { setDeliveryType, setDeliveryStorage } from '../../redux/deliverySlice';

import map from '../../images/kiev_district.jpg';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { StorageSelectedModal } from 'Components/StorageSelectedModal/StorageSelectedModal';

import { CityBtn, StorageMapWrap, Image, Title } from './StorageMap.styled';

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

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleClickOpen = storageLocation => {
    setOpen(true);
    setSelectedValue(storageLocation);
  };

  const handleClose = value => {
    setOpen(false);
    dispatch(setDeliveryType(value));
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

      {storages.map(storage => (
        <CityBtn
          type="button"
          number={storage.id}
          onClick={() => handleClickOpen(storage.location)}
        >
          {storage.id}
        </CityBtn>
      ))}

      <Image src={map} alt="map of kiyv" width={600}></Image>
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
      <Button variant="contained" onClick={handleClickNextPage} sx={{ mt: 2 }}>
        Продовжити
      </Button>
    </StorageMapWrap>
  );
};
