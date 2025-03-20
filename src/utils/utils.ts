export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const calculateDiscount = (
  price: number,
  discountRate: number = 1.5
): string => {
  return (price * discountRate).toFixed(2);
};
