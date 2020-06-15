export const hexToRGBA = (hex: string, a?: number): string => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  return a ? `rgba(${r},${g},${b},${a})` : `rgb(${r},${g},${b})`;
};
