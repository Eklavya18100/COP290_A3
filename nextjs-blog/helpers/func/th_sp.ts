export default function th_sp(val: number): string {
  //separate number with comma
  try {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } catch (e) {
    return "";
  }
}
