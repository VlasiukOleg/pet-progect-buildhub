export const calculateDeliveryFee = weight => {
  if (weight > 0 && weight <= 1500) {
    return 700;
  } else if (weight > 1500 && weight <= 2050) {
    return 800;
  } else if (weight > 2050 && weight <= 3000) {
    return 1200;
  } else if (weight > 3000 && weight <= 5000) {
    return 1500;
  } else if (weight > 5000 && weight <= 10000) {
    return 2000;
  } else if (weight > 10000) {
    return 'розраховується індивідуально';
  } else {
    return 0;
  }
};
