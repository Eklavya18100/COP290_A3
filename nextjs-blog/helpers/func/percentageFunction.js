export default function percentageFunction(val) {
  if (val >= 100 || val <= -100) {
    return Math.round(val);
  } else if ((val < 100 && val >= 10) || (val > -100 && val <= -10)) {
    return val.toFixed(1);
  } else if ((val < 10 && val >= 0) || (val > -10 && val <= 0)) {
    return val.toFixed(2);
  } else {
    return val;
  }
}
