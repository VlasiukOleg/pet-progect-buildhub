const MIN_PRICE = 400;
const BASE_PRICE = 0.5;

export const calculateMovingFee = (weight, elevator, distance) => {
  let movingFee = 0;
  console.log(weight);
  console.log(distance);

  if (weight > 0 && weight < 1000) {
    movingFee = MIN_PRICE;
  } else {
    movingFee = BASE_PRICE * weight;
  }

  if (elevator === 'passenger') {
    movingFee *= 1.15;
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
