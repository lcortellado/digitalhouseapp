export const numberFormat = (number: string) => {
  if (number) {
    const parts = number.toString().split(".");
    const numberPart = parts[0];
    const decimalPart = parts[1];
    const thousands = /\B(?=(\d{3})+(?!\d))/g;

    return (
      numberPart.replace(thousands, ",") +
      (decimalPart ? "." + decimalPart : "")
    );
  }
};

export const totalSum = (data: any) => {
  const total = data.reduce(
    (sum: number, item: any) => sum + item.points + item.points,
    0
  );
  return total;
};
