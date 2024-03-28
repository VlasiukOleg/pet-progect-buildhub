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

export const Moving = ({ totalWeight }) => {
  const MIN_PRICE = 400;
  const BASE_PRICE = 0.5;

  const [elevatorDistance, setElevatorDistance] = useState(10);
  const [floor, setFloor] = useState(1);
  const [elevator, setElevator] = useState('cargo');
  const [building, setBuilding] = useState('new');

  const movingPrice = useSelector(getMovingPrice);
  const isMovingPriceAddToOrder = useSelector(getIsMovingPriceAddToOrder);

  const dispatch = useDispatch();

  const onAddMovingPrice = () => {
    dispatch(toggleMovingPriceToOrder());
  };

  const onChangeElevator = e => {
    setElevator(e.target.value);
    setMovingCost(prevState => Math.round(prevState * 1.15));
  };

  const onChangeBuilding = e => {
    setBuilding(e.target.value);
    setMovingCost(prevState => Math.round(prevState * 1.06));
  };

  const onChangeFloor = e => {
    if (floor < e.target.value) {
      setMovingCost(prevState => Math.round(prevState * 1.1));
    } else {
      setMovingCost(prevState => Math.round(prevState / 1.1));
    }
    console.log(e.target.value);
    setFloor(e.target.value);
  };

  useEffect(() => {
    if (totalWeight > 0 && totalWeight < 1000) {
      dispatch(setMovingCost(MIN_PRICE));
      return;
    } else {
      dispatch(setMovingCost(totalWeight * BASE_PRICE));
    }
  }, [totalWeight, dispatch]);

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
            onChange={onChangeElevator}
          />
          Пасажирський ліфт
        </label>
        <label>
          <input
            type="radio"
            name="elevator"
            value="cargo"
            checked={elevator === 'cargo'}
            onChange={onChangeElevator}
          />
          Вантажний ліфт
        </label>
        <label>
          <input
            type="radio"
            name="elevator"
            value="nolift"
            checked={elevator === 'nolift'}
            onChange={onChangeElevator}
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
              onChange={onChangeBuilding}
            />
            Новий дім/Хрущевка
          </label>
          <label>
            <input
              type="radio"
              name="building"
              value="old"
              checked={building === 'old'}
              onChange={onChangeBuilding}
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
              onChange={onChangeFloor}
            />
          </label>
        </div>
      )}

      <label>
        <p>
          Загальна відстань заносу матеріалу від машини до ліфта, від ліфта до
          квартири -{elevatorDistance} м.
        </p>
        <input
          type="range"
          min="0"
          max="100"
          name="elevator_distance"
          value={elevatorDistance}
          step="5"
          onChange={e => setElevatorDistance(e.target.value)}
        />
      </label>

      <div>Вартість вантажників - {movingPrice} грн.</div>

      <ToogleMovingBtn
        type="button"
        onClick={onAddMovingPrice}
        isMovingPriceAdd={isMovingPriceAddToOrder}
      >
        {isMovingPriceAddToOrder
          ? 'Прибрати с замовлення'
          : 'Додати до замовлення'}
      </ToogleMovingBtn>
    </>
  );
};
