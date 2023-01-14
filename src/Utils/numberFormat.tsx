export const numberFormat = (number: string) => {
  const parts = number.toString().split(".");
  const numberPart = parts[0];
  const decimalPart = parts[1];
  const thousands = /\B(?=(\d{3})+(?!\d))/g;

  return (
    numberPart.replace(thousands, ",") + (decimalPart ? "." + decimalPart : "")
  );
};
