interface CalculateProps {
  ethanolValue: number;
  gasolineValue: number;
}

const getBestFuel = ({ ethanolValue, gasolineValue }: CalculateProps): string | TypeError => {
  if(gasolineValue === 0) return new TypeError("Invalid gasoline value!");
  return ((ethanolValue / gasolineValue) < 0.7) ? "Gasoline" : "Ethanol";
};

const formatPrice = (fuelPrice: string): string => {
  if(!fuelPrice) return "0";
  const onlyNumbers: string = fuelPrice.replace(/\D/g, "");

  return (parseFloat(onlyNumbers || "0")).toFixed(2);
};

export { formatPrice, getBestFuel };
