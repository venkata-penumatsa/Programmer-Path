// __________________________________________________
// Function to convert minutes into hours
// __________________________________________________

export const convertMinsToHrsMins = (mins) => {
  let h = Math.floor(mins / 60);
  let m = Math.round(mins % 60);
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  return `${h}h-${m}m`;
};
