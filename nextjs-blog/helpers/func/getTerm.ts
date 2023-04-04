export default function (
  youngestKidAge: number,
  mortgageYears: number
): number {
  // child_age = 21-kids_age;
  let max_term = Math.max(21 - youngestKidAge, mortgageYears);

  if (max_term >= 0 && max_term <= 5) {
    return 5;
  } else if (max_term >= 6 && max_term <= 10) {
    return 10;
  } else if (max_term >= 11 && max_term <= 15) {
    return 15;
  } else if (max_term >= 16 && max_term <= 20) {
    return 20;
  } else if (max_term >= 21 && max_term <= 25) {
    return 25;
  } else if (max_term >= 26) {
    return 30;
  } else {
    return 0;
  }
}
