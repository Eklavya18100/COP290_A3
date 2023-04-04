export default function th_sp(val) {
  //separate number with comma
  try {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } catch (e) {
    return '';
  }
}
