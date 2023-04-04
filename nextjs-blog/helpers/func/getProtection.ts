export default function getProtection(
  annualIncome: number,
  kids: number,
  spouse: boolean,
  age: number
): number {
  if (kids === 0 && spouse === false) {
    return 0;
  } else if (kids <= 2) {
    if (age >= 20 && age <= 30) {
      if (annualIncome <= 320000) {
        return annualIncome * 20;
      } else if (annualIncome > 320000) {
        return annualIncome * 15;
      }
    } else if (age >= 31 && age <= 40) {
      if (annualIncome <= 400000) {
        return annualIncome * 15;
      } else if (annualIncome > 400000) {
        return annualIncome * 12;
      }
    } else if (age >= 41 && age <= 50) {
      if (annualIncome <= 533333) {
        return annualIncome * 12;
      } else if (annualIncome > 533333) {
        return annualIncome * 9;
      }
    } else if (age >= 51 && age <= 60) {
      if (annualIncome <= 800000) {
        return annualIncome * 8;
      } else if (annualIncome > 800000) {
        return annualIncome * 7;
      }
    }
  } else if (kids >= 3) {
    //this.setState({protection:annualIncome*40});
    if (age >= 20 && age <= 30) {
      if (annualIncome < 320000) {
        return annualIncome * 25;
      } else if (annualIncome >= 320000) {
        return annualIncome * 20;
      }
    } else if (age >= 31 && age <= 40) {
      if (annualIncome < 400000) {
        return annualIncome * 20;
      } else if (annualIncome >= 400000) {
        return annualIncome * 15;
      }
    } else if (age >= 41 && age <= 50) {
      if (annualIncome < 533333) {
        return annualIncome * 15;
      } else if (annualIncome >= 533333) {
        return annualIncome * 12;
      }
    } else if (age >= 51 && age <= 60) {
      if (annualIncome < 800000) {
        return annualIncome * 10;
      } else if (annualIncome >= 800000) {
        return annualIncome * 8;
      }
    }
  }
}
