const MIN_PRICE = 400;
const BASE_PRICE = 0.5;
const PRICE_PER_FLOOR = 0.25;

export const calculateMovingFee = (
  weight,
  elevator,
  distance,
  building,
  floor
) => {
  let movingFee = 0;

  if (weight > 0 && weight < 1000) {
    movingFee = MIN_PRICE;
  } else {
    movingFee = BASE_PRICE * weight;
  }

  if (elevator === 'passenger') {
    movingFee *= 1.15;
  }

  if (floor > 1) {
    movingFee = (BASE_PRICE + PRICE_PER_FLOOR * (floor - 1)) * weight;
  }

  if (floor > 1 && building === 'old') {
    movingFee = (BASE_PRICE + (PRICE_PER_FLOOR + 0.05) * (floor - 1)) * weight;
  }

  if (distance <= 20) {
    movingFee *= 1;
  } else if (distance > 20 && distance < 35) {
    movingFee *= 1.2;
  } else if (distance >= 35 && distance < 45) {
    movingFee *= 1.4;
  } else if (distance >= 45 && distance <= 50) {
    movingFee *= 1.5;
  } else if (distance > 50) {
    movingFee *= 2;
  }
  return movingFee;
};
