export const getIdFromLink = (link: string): RegExpMatchArray | null => {
  const regex = /\d+/;

  return link.match(regex);
};

export const formatNumber = (number: number) => {
  return number.toLocaleString(undefined);
};
