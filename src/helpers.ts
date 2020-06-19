export const getIdFromLink = (link: string): RegExpMatchArray | null => {
  const regex = /\d+/;

  return link.match(regex);
};

export const formatNumber = (number: number) => {
  return number.toLocaleString(undefined);
};

export const debounce = (callback: any, delay: number = 250): Function => {
  let timeoutId: any;
  return (...args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      callback(...args);
    }, delay);
  };
};
