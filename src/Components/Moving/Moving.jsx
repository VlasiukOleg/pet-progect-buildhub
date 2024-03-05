import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMovingCost } from '../../redux/movingSlice';

import { ToogleMovingBtn } from './Moving.styled';

export const Moving = ({ totalWeight }) => {
  const [elevatorDistance, setElevatorDistance] = useState(10);
  const [floor, setFloor] = useState(1);
  const [elevator, setElevator] = useState('cargo');
  const [building, setBuilding] = useState('new');
  const [movingPrice, setMovingPrice] = useState(0);
  const [isMovingPriceAdd, setIsMovingPriceAdd] = useState(false);

  const dispatch = useDispatch();

  const onAddMovingPriceToOrder = () => {
    if (isMovingPriceAdd) {
      dispatch(setMovingCost(0));
      setIsMovingPriceAdd(prevState => !prevState);
      return;
    }
    dispatch(setMovingCost(movingPrice));
    setIsMovingPriceAdd(prevState => !prevState);
  };

  const onChangeElevator = e => {
    setElevator(e.target.value);
    setMovingPrice(prevState => Math.round(prevState * 1.15));
  };
  const onChangeBuilding = e => {
    setBuilding(e.target.value);
    setMovingPrice(prevState => Math.round(prevState * 1.06));
  };
  const onChangeFloor = e => {
    if (floor < e.target.value) {
      setMovingPrice(prevState => Math.round(prevState * 1.1));
    } else {
      setMovingPrice(prevState => Math.round(prevState / 1.1));
    }
    console.log(e.target.value);
    setFloor(e.target.value);
  };

  useEffect(() => {
    const calculateMovingFee = weight => {
      if (weight < 1000 && weight > 0 && elevator === 'cargo') {
        setMovingPrice(500);
        return;
      }
      if (weight >= 1000 && elevator === 'cargo') {
        setMovingPrice(weight * 0.6);
        return;
      }
      if (weight < 1000 && weight > 0 && elevator === 'nolift') {
        setMovingPrice(750);
        return;
      }
      if (weight >= 1000 && elevator === 'nolift' && building === 'new') {
        setMovingPrice(weight * 0.85);
      }
    };
    if (isMovingPriceAdd) {
      dispatch(setMovingCost(movingPrice));
    }

    calculateMovingFee(totalWeight);
  }, [
    building,
    elevator,
    totalWeight,
    dispatch,
    isMovingPriceAdd,
    movingPrice,
  ]);

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
        onClick={onAddMovingPriceToOrder}
        isMovingPriceAdd={isMovingPriceAdd}
      >
        {isMovingPriceAdd ? 'Прибрати с замовлення' : 'Додати до замовлення'}
      </ToogleMovingBtn>
    </>
  );
};
