import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setMovingCost,
  toggleMovingPriceToOrder,
} from '../../redux/movingSlice';
import {
  getMovingPrice,
  getIsMovingPriceAddToOrder,
} from '../../redux/selectors';

import { ToogleMovingBtn } from './Moving.styled';

import { calculateMovingFee } from 'utils/calculateMovingFee';

export const Moving = ({ totalWeight }) => {
  const [distance, setDistance] = useState(20);
  const [floor, setFloor] = useState(1);
  const [elevator, setElevator] = useState('cargo');
  const [building, setBuilding] = useState('new');

  const movingPrice = useSelector(getMovingPrice);
  const isMovingPriceAddToOrder = useSelector(getIsMovingPriceAddToOrder);

  const dispatch = useDispatch();

  const onAddMovingPrice = () => {
    dispatch(toggleMovingPriceToOrder());
  };

  useEffect(() => {
    if (elevator !== 'nolift') {
      setFloor(1);
      setBuilding('new');
    }
    const movingFee = calculateMovingFee(
      totalWeight,
      elevator,
      distance,
      building,
      floor
    );

    dispatch(setMovingCost(Math.round(movingFee)));
  }, [totalWeight, dispatch, elevator, distance, floor, building]);

  return (
    <>
      <div>Загальна вага - {totalWeight} кг.</div>

      <div>
        <label>
          <input
            type="radio"
            name="elevator"
            value="passenger"
            checked={elevator === 'passenger'}
            onChange={e => setElevator(e.target.value)}
          />
          Пасажирський ліфт
        </label>
        <label>
          <input
            type="radio"
            name="elevator"
            value="cargo"
            checked={elevator === 'cargo'}
            onChange={e => setElevator(e.target.value)}
          />
          Вантажний ліфт
        </label>
        <label>
          <input
            type="radio"
            name="elevator"
            value="nolift"
            checked={elevator === 'nolift'}
            onChange={e => setElevator(e.target.value)}
          />
          Без ліфта
        </label>
      </div>

      {elevator === 'nolift' && (
        <div>
          <label>
            <input
              type="radio"
              name="building"
              value="new"
              checked={building === 'new'}
              onChange={e => setBuilding(e.target.value)}
            />
            Новий дім/Хрущевка
          </label>
          <label>
            <input
              type="radio"
              name="building"
              value="old"
              checked={building === 'old'}
              onChange={e => setBuilding(e.target.value)}
            />
            Сталінка/Царський
          </label>
          <label>
            Поверх
            <input
              type="number"
              name="floor"
              min="1"
              value={floor}
              onChange={e => setFloor(e.target.value)}
            />
          </label>
        </div>
      )}

      <label>
        <p>
          Приблизна загальна відстань заносу матеріалу від машини до ліфта, від
          ліфта до квартири -{distance} м.
        </p>
        <input
          type="range"
          min="0"
          max="100"
          name="elevator_distance"
          value={distance}
          step="5"
          onChange={e => setDistance(Number(e.target.value))}
        />
      </label>

      <div>Вартість вантажників - {movingPrice} грн.</div>

      <ToogleMovingBtn
        type="button"
        onClick={onAddMovingPrice}
        isMovingPriceAdd={isMovingPriceAddToOrder}
      >
        {isMovingPriceAddToOrder
          ? 'Прибрати з замовлення'
          : 'Додати до замовлення'}
      </ToogleMovingBtn>
    </>
  );
};
