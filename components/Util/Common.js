import format from "date-fns/format";

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

export function fDate(date, option) {
  return format(new Date(date), option || "yyyy-dd-MM");
}
