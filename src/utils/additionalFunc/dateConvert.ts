export const convertDate = (date: string) => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  const formattedDate = `${day < 10 ? '0' : ''}${day}.${
    month < 10 ? '0' : ''
  }${month}.${year}`;
  return formattedDate;
};
